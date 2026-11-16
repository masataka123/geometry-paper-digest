---
layout: paper
title: Indecomposability of derived categories and nef canonical divisors in dimensions three and four
title_ja: 三・四次元での導来圏の分解不能性と標準因子のnef性
authors: Dongjian Wu, Nantao Zhang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that a smooth projective threefold or fourfold whose bounded derived category admits no nontrivial semiorthogonal decomposition has nef canonical divisor, which establishes \cite[Conjecture~1.1]{KO2018} in these dimensions. The proof combines the classification of extremal contractions with constructions of nontrivial admissible subcategories. In dimension four, we refine the descriptions of isolated surface fibers and construct exceptional objects supported on certain fibers.
topic: algebraic-geometry
tags:
- minimal-model-program
- birational-geometry
- positivity
arxiv_id: 2610.39838v2
arxiv_url: https://arxiv.org/abs/2610.39838
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-11-13'
summary: 滑らかな複素射影三次元・四次元多様体について、導来圏が非自明な半直交分解を持たなければ標準因子がnefであることを示す。標準因子がnefでない場合の端射線収縮から非自明な許容部分圏を構成する。四次元では孤立した曲面ファイバーの構造と例外対象の構成が鍵になる。
abstract_en: We prove that a smooth projective threefold or fourfold whose bounded derived category admits no nontrivial semiorthogonal decomposition has nef canonical divisor, which establishes \cite[Conjecture~1.1]{KO2018} in these dimensions. The proof combines the classification of extremal contractions with constructions of nontrivial admissible subcategories. In dimension four, we refine the descriptions of isolated surface fibers and construct exceptional objects supported on certain fibers.
summary_en: ''
abstract_ja: 連接層の有界導来圏の半直交分解不能性が標準因子のnef性を強制するという予想を、滑らかな射影多様体の三次元・四次元の場合に証明する。端射線収縮の分類と許容部分圏の構成を組み合わせる。四次元から三次元への収縮では特定の孤立曲面ファイバーの記述を精密化し、その構造層が例外対象になることや、像の局所的な滑らかさを示す。標準因子がnefなら必ず分解不能という逆向きの主張はしない。
abstract_source_url: https://arxiv.org/abs/2610.39838
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.39838v2](https://arxiv.org/abs/2610.39838)
- **著者:** Dongjian Wu, Nantao Zhang
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-11-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

双有理幾何の操作が導来圏の分解にどう反映されるかは、極小モデル理論と導来圏を結ぶ基本問題である。滑らかな中心の爆発では、元の多様体と中心の導来圏が半直交分解に現れる。こうした現象から、導来圏を非自明に分解できないなら標準因子はすでにnefであるはずだという予想が生まれる。

本論文はこの予想を三次元と四次元で示す。証明は対偶を取り、標準因子がnefでなければ存在する端射線収縮から、導来圏の非零かつ真の許容部分圏を作る。したがって、圏論的な分解不能性から幾何学的な極小性への必要条件を得る。

四次元では収縮のファイバーが複雑になり、三次元の場合と同じ議論だけでは済まない。著者らは孤立した二次元ファイバーのいくつかの型を精密に調べ、例外対象や局所的な収縮先の構造を得る。逆にnef性だけから分解不能性を導くことはできず、IntroductionはEnriques曲面を反例として挙げる。

## 背景と問題設定

$D^b(X)$ は連接層の有界導来圏である。非自明な半直交分解とは、互いの向き付き直交性を満たす非零の部分圏へ圏全体を分けるものである。許容部分圏は包含が左右の随伴を持つ部分圏であり、非零かつ真の許容部分圏があれば非自明な半直交分解を得る。

標準束の基点集合が有限の場合などには分解不能性の既知の判定がある。一方で、分解不能性から標準因子の数値的性質を読み取る逆方向の問題が、IntroductionのConjecture 1.1である。

## 主結果

### 主定理1（Theorem 1.2）

$X$ を複素数体上の滑らかな射影多様体で $\dim X\in\lbrace 3,4\rbrace $ とする。このとき

$$
D^b(X)\text{ が非自明な半直交分解を持たない}
\quad\Longrightarrow\quad K\_X\text{ はnef}.
$$

nefとはすべての曲線に対する交点数が非負であることをいう。一般次元の予想を主張しているのではなく、ここで証明する次元を三・四次元に限定する。逆は曲面でも偽であり、数値的に自明な標準因子を持つEnriques曲面では構造層が例外対象となる。

### 主定理2（Theorem 1.3）：孤立曲面ファイバー

$f:X^4\to Y^3$ を滑らかな四次元多様体からの基本的な $K\_X$ 負の収縮とし、$E=(f^{-1}(P))\_{\mathrm{red}}$ を孤立した曲面ファイバー、$H=-K\_X$ とする。Introductionは既存分類のC2・C3・C5型について次を示す。

- C2型では $E=A\cup\_LB$、$A\simeq B\simeq\mathbb P^2$ で、$L$ は双方の直線、$H$ の制限はいずれも $\mathcal O(1)$ である。この場合、スキーム論的ファイバーは被約で、$Y$ は $P$ で滑らかである。
- C3型では $E\simeq\mathbb P(1,1,3)$、$\mathcal O\_E(H)\simeq\mathcal O\_E(3)$ であり、$X$ 上へ零延長した $\mathcal O\_E$ が例外対象となる。ファイバーの被約性と $Y$ の滑らかさも従う。
- C5型では $E=A\cup\_LB$、$A\simeq\mathbb P^2$、$B\simeq\mathbb P(1,1,2)$ で、$H$ の制限がそれぞれ $\mathcal O\_A(1)$、$\mathcal O\_B(2)$ となる。この場合も $\mathcal O\_E$ は例外対象である。

型の呼称は原論文が参照する分類に従う。このようなファイバー上の対象を構成することで、滑らかでない収縮先が現れる場合にも圏の非自明な部分を取り出せる。

## 証明の見取り図

$K\_X$ がnefでないと仮定すると、錐定理と収縮定理から $K\_X$ 負の基本収縮が得られる。収縮先が滑らかなら導来引き戻しの像を使い、既約因子を一点へ潰す場合にはその構造層を例外対象として使う。

四次元の特別なファイバーには、余法層、その反標準切断への制限、ファイバーに沿った爆発を調べる。これらの記述から自己Extの消滅や収縮先の局所構造を得る。特異な収縮先を持つ因子的収縮には局所的な圏論的解消と半直交分解の降下も用いる。各型で得た許容部分圏を収縮の分類と合わせ、対偶によって主定理へ至る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.39838)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.39838v2) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.3；Conjecture 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.39838v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
