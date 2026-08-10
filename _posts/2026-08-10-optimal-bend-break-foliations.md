---
layout: paper
title: "Optimal bend-and-break for foliations"
title_ja: "葉層に対する最適bend-and-break"
authors: "Jihao Liu, Zeming Sun, Jiedong Jiang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.20754v1"
arxiv_url: "https://arxiv.org/abs/2605.20754v1"
arxiv_submitted: "2026-05-20"
arxiv_updated: "2026-05-20"
summary: >-
  正規射影多様体上の階数 $r$ の葉層について、葉層に接する有理曲線を作るbend-and-break不等式の定数を従来の $2r$ から最適値 $r+1$ へ改善する。十分一般の完全交叉曲線と $K_{\mathcal F}$ の負性の下で明示的な次数評価を与え、積射影空間の例で定数の最適性も示す。
abstract_en: ""
summary_en: >-
  The paper establishes a sharp bend-and-break estimate for rational curves tangent to a foliation on a normal projective variety. For a rank-$r$ foliation, the universal coefficient is reduced to $r+1$, and an explicit smooth algebraically integrable example shows that no smaller coefficient works. The argument combines an algebraic-integrability reduction, a relative model for leaf neighborhoods, stable-map degeneration, and passage through positive characteristic. The authors state that generative AI, especially the Rethlas system, played a substantial role in producing the proof, which they report as human-verified.
abstract_ja: >-
  正規射影多様体上の任意の階数 $r$ の葉層に対し、葉層に接する有理曲線のbend-and-break不等式で最適な定数が $r+1$ であることを示す。Bogomolov–McQuillanの方法とJovinelly–Lehmann–Riedlのbend-and-shatterを組み合わせる。著者らは主結果の証明に生成AI、とりわけRethlasシステムを大幅に利用し、人間が検証したと明記している。
abstract_source_url: "https://arxiv.org/abs/2605.20754v1"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.20754v1](https://arxiv.org/abs/2605.20754v1)
- **著者:** Jihao Liu, Zeming Sun, Jiedong Jiang
- **初回投稿日・確認版の更新日:** 2026年5月20日
- **主分類:** math.AG
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Moriのbend-and-breakは、標準束に対して負な曲線から次数を制御した有理曲線を作る双有理幾何の基本道具である。葉層版では、有理曲線を葉層に接するように作る必要があり、階数 $r$ に対する既知の一般定数は $2r$ だった。

本論文は、正規射影多様体上の任意の葉層について最適定数が $r+1$ であると証明する。仮定は十分一般の高次数完全交叉曲線 $C$ に沿って $K_{\mathcal F}\cdot C<0$ となることで、任意の ample divisor $H$ に対する曲線次数が明示的に抑えられる。

$\mathbb P^r\times\mathbb P^{n-r}$ の射影から来る滑らかな代数的可積分葉層を用い、$r+1$ より小さい一様定数では不等式が破れることも示す。したがって改善値は証明技術上の上界にとどまらない。

## 背景と問題設定

$X$ を次元 $n$ の正規射影多様体、$\mathcal F\subset T_X$ を階数 $r$ の葉層とする。多様体自身の場合の最適係数 $n+1$ に対応して、$K_{\mathcal F}$ が負となる曲線から $\mathcal F$ に接する有理曲線をどの係数で作れるかが問題である。

従来のBogomolov–McQuillan評価は $2r$ だった。本結果は $r=n$ では通常のbend-and-breakに、$r=1$ では $2r=r+1$ なので既知の葉層評価に一致する。一般的な葉層のcone theoremはまだないため、論文は極端射線の長さではなくbend-and-break不等式として主張する。

## 主結果

### 主定理（Theorem 1.1）

$H_1,\ldots,H_{n-1},H$ を $X$ 上のample divisorとし、$C$ を $D_i\in|m_iH_i|$（$m_i\gg0$）の十分一般の完全交叉とする。$K_{\mathcal F}\cdot C<0$ なら、$C$ の一般点を通る $\mathcal F$ 接有理曲線 $\Sigma$ が存在して

$$
H\cdot\Sigma\leq (r+1)\frac{H\cdot C}{-K_{\mathcal F}\cdot C}
$$

を満たす。

### 最適性（Remark 1.2）

$X=\mathbb P^r\times\mathbb P^{n-r}$ とし、第2射影のファイバーに沿う葉層を取ると $K_{\mathcal F}=-(r+1)\xi_1$ である。$H_\varepsilon=\xi_1+\varepsilon\xi_2$ とすると、最短の接有理曲線はファイバー内の直線で $H_\varepsilon$ 次数1を持つ。係数を $c<r+1$ と仮定すれば、十分小さい $\varepsilon>0$ に対して次数が1未満でなければならず矛盾する。

## 証明の見取り図

まずMehta–Ramanathan制限とCampana–Păunの判定法から、$\mathcal F$ 内に曲線上でampleな代数的可積分部分葉層 $\mathcal G$ を取り出す。次にBogomolov–McQuillan/Kebekus–Solá Conde–Tomaのgraph-neighborhood相対モデルで、葉層への接性を相対空間の垂直性へ移す。

Jovinelly–Lehmann–Riedlの最適bend-and-shatterを相対化し、正標数でFrobenius引き戻しにより変形空間の次元を増幅する。spreading outで標数0へ戻しても垂直性を保ち、得られた曲線を $X$ へ押し出す。階数と標準類次数の比較が $\mathcal G$ の評価を $\mathcal F$ の係数 $r+1$ に変換する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.20754v1](https://arxiv.org/abs/2605.20754v1)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Remark 1.2
- **論文構成の説明:** Section 1.4, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
