---
layout: paper
title: Algebraic ellipticity of double covers of $(\mathbf P^1)^3$
title_ja: 三つの射影直線の積の二重被覆と代数的楕円性
authors: Alexander Dvorsky, Shulim Kaliman, Mikhail Zaidenberg
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We show that every smooth complex double cover of $(\mathbf P^1)^3$ branched along a smooth divisor of tridegree $(2,2,2)$ is algebraically Gromov elliptic. These irrational Fano threefolds form Mori--Mukai family 3-1 and have anticanonical genus seven and Picard rank three. Their three coordinate projections define degree-four del Pezzo fibrations. Each threefold also admits a dominant rational map of degree two from $\mathbf P^3$.
topic: algebraic-geometry
tags:
- fano-varieties
- oka-theory
- birational-geometry
arxiv_id: 2611.04983v1
arxiv_url: https://arxiv.org/abs/2611.04983
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-03'
summary: 三つの射影直線の積を三重次数(2,2,2)の滑らかな因子に沿って二重被覆したFano三次元多様体の代数的楕円性を示す。三つのdel Pezzo曲面族から局所スプレーを作り、非有理な射影多様体にも豊富な代数的変形方向が存在することを明らかにする。
abstract_en: We show that every smooth complex double cover of $(\mathbf P^1)^3$ branched along a smooth divisor of tridegree $(2,2,2)$ is algebraically Gromov elliptic. These irrational Fano threefolds form Mori--Mukai family 3-1 and have anticanonical genus seven and Picard rank three. Their three coordinate projections define degree-four del Pezzo fibrations. Each threefold also admits a dominant rational map of degree two from $\mathbf P^3$.
summary_en: ''
abstract_ja: 三重次数(2,2,2)の滑らかな因子で分岐する、三つの射影直線の積の滑らかな複素二重被覆はすべて代数的Gromov楕円的である。これらはMori–Mukai分類の族3-1に属する非有理Fano三次元多様体で、反標準種数は7、Picard数は3となる。三つの座標射影から次数4のdel Pezzoファイブレーションが得られ、各多様体には三次元射影空間から次数2の支配的有理写像も存在する。
abstract_source_url: https://arxiv.org/abs/2611.04983
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.04983v1](https://arxiv.org/abs/2611.04983)
- **著者:** Alexander Dvorsky, Shulim Kaliman, Mikhail Zaidenberg
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

代数的楕円性は、多様体の各点で接空間の全方向を代数的な写像族によって動かせるという柔軟性である。滑らかな完備有理多様体については既知だが、非有理な射影多様体にどこまで広がるかは別の問題となる。

本論文は、三つの射影直線の積の二重被覆からなるFano三次元多様体の全族について、この性質を証明する。分岐因子が滑らかならよく、非常に一般的な多様体だけに結論を限定していない。

証明の特徴は、三つのdel Pezzo曲面ファイブレーションを同時に使う点にある。一つの曲面上で二方向の局所スプレーを作り、異なるファイブレーションの接平面を組み合わせることで三次元の全接空間を張る。

## 背景と問題設定

代数的スプレーとは、ベクトル束$p:E\to V$と射$s:E\to V$で$s(0\_v)=v$を満たすものである。各ファイバー上の零点における微分が$T\_vV$へ全射となるとき、その点で支配的という。全点で支配的なスプレーを持つことが代数的Gromov楕円性である。

$Y=(\mathbb P^1)^3$、$L=\mathcal O\_Y(1,1,1)$とし、滑らかな$R\in|\mathcal O\_Y(2,2,2)|$に沿う二重被覆を$\pi:X\to Y$とする。二重被覆の標準束公式から

$$
-K\_X=\pi^\ast L,\qquad (-K\_X)^3=12,\qquad 1+\frac{(-K\_X)^3}{2}=7
$$

となる。Picard数は3で、各射影$f\_i=\operatorname{pr}\_i\circ\pi$は次数4のdel Pezzo曲面族を与える。Introductionは既存の分類結果を引用して、これらの$X$は有理ではないと説明する。

## 主結果

### 全滑らかな二重被覆の代数的楕円性（Theorem 1.1）

上記のすべての滑らかな分岐因子$R$に対し、$X$は代数的Gromov楕円的である。特定の分岐式や一般位置の追加条件を課さず、Mori–Mukaiの族3-1全体に適用することが結論の強さである。

この性質を有理性と同一視してはいけない。本論文が扱うのは非有理な多様体でありながら代数的スプレーが全接方向を生成するという現象である。Introductionはさらに、Proposition 4.2で次数2の支配的有理写像$\mathbb P^3\dashrightarrow X$を構成すると述べる。これは単有理性の具体化であり、双有理同型の主張ではない。

## 証明の見取り図

各del Pezzo曲面ファイバーの滑らかな点$a$で、別の補助点$q$を選び、$a$を通り$q$に通常二重点を持つ反標準曲線を取る。$q$のブローアップ後、この曲線は滑らかな二次曲線となる。弱近似を用いて$q$を近くのファイバーへ断面として延ばし、二次曲線族の局所的なアフィン座標から階数1のスプレーを得る。

補助点を二通り選んで曲面の接空間を張る速度を作る。各点では少なくとも二つの$f\_i$がそこで滑らかであり、そのファイバー接平面が異なるため、スプレーの速度は$T\_aX$を張る。Gromovの局所化と代数的劣楕円性・楕円性の同値を使って大域的結論へ進む。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.04983)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.04983v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1; Proposition 4.2（Introductionで言及）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.04983v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
