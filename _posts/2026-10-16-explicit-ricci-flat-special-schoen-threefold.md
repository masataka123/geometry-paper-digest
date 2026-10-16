---
layout: paper
title: Explicit Ricci-flat metrics on a special Schoen threefold
title_ja: 特殊なSchoen三次元多様体のRicci-flat計量を収束級数で表す
authors: Jixiang Fu, Jiuhe Liu, Yunyang Xiao, Shing-Tung Yau
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We give an explicit convergent representation of the Ricci-flat K\"ahler metric in a one-parameter family of classes on a fixed special Schoen threefold. The threefold resolves a shifted square-torus quotient with sixteen disjoint elliptic singular curves. Radial Eguchi--Hanson product metrics and fixed flat collars define a positive background with an exact $a^4$ volume defect. Spherical harmonics, tangential Fourier modes, Frobenius recurrences, radial ordered integrals, and the flat quotient heat kernel specify the inverse of the background scalar linearized operator. A boundary transmission series has contraction factor $1/15$. Independent weighted zeroth-order and six-dimensional Schauder estimates give the inverse bound needed for the quadratic and cubic Monge--Amp\`ere terms. The resulting source-degree recursion converges for $0<a\le2^{-2260}$, with explicit coefficient, potential-tail, and relative metric-tail bounds. The representation uses specified kernels, prescribed
  integrals, and convergent series; its parameter interval is a sufficient quantitative bound on this fixed model.
topic: differential-geometry
tags:
- calabi-yau-geometry
- kahler-einstein-metrics
- monge-ampere-equations
arxiv_id: 2610.21932v1
arxiv_url: https://arxiv.org/abs/2610.21932
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 固定した特殊なSchoen三次元多様体の1パラメータKähler類に対し、Ricci-flat計量を核・積分・収束級数で明示する。例外曲線の尺度が十分小さい領域で非線形補正を構成し、係数、打切り誤差、背景計量との比較を定量的に評価する。
abstract_en: ''
summary_en: This paper makes the correction from a glued background to a Ricci-flat metric quantitatively explicit on one fixed Calabi–Yau threefold. The construction treats elliptic singular curves, so normal and tangential modes both enter the inverse operator. A second convergent series handles the nonlinear Monge–Ampère equation. The certified interval is a sufficient range for this model, rather than an optimal bound or a finite numerical evaluation.
abstract_ja: 16本の楕円特異曲線を持つトーラス商の解消である特殊なSchoen三次元多様体上で、Ricci-flat計量の収束表現を構成する。Eguchi–Hanson積計量からの背景にはaの4乗の体積補正が必要であり、大域的逆作用素と二次・三次非線形項の再帰によってこれを修正する。指定した小パラメータ区間で収束と打切り誤差を保証するが、対象は固定した複素構造と指定の類の族に限られる。
abstract_source_url: https://arxiv.org/abs/2610.21932
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21932v1](https://arxiv.org/abs/2610.21932)
- **著者:** Jixiang Fu, Jiuhe Liu, Yunyang Xiao, Shing-Tung Yau
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi–Yau多様体のKähler類にRicci-flat計量が存在することと、その計量を具体的に表すことは別の問題である。本論文は一つの特殊なSchoen三次元多様体を固定し、線形逆作用素、非線形補正の各係数、収束評価まで指定した表現を構成する。

モデルは、正方形楕円曲線の三重積の商に現れる16本の楕円特異曲線を解消したものである。特異曲線に垂直な方向にはEguchi–Hanson幾何が現れるが、接方向にも二つの実方向があるため、K3の場合の逆作用素を単純に積にするだけでは足りない。

得られる表現は、指定した核、積分、収束級数を組み合わせたものであり、有限の閉じた式や六次元計量の数値計算結果ではない。十分小さいパラメータの明示的区間において、計量の正値性、Ricci-flat性、係数の減衰と打切り誤差を保証する。

## 背景と問題設定

$D\_1,\ldots,D\_{16}$を例外因子、$\kappa$を平坦orbifold類の引き戻しとして、対象のKähler類は

$$
\alpha\_a=\kappa-\frac{\pi a^2}{2}\sum\_{j=1}^{16}[D\_j]
$$

である。各例外的有理ファイバーの面積は$\pi a^2$となる。背景計量$\omega\_a^{\mathrm{bg}}$を作り、$dV\_a=h\_a\mu$、$\int\_X\mu=1/4$と書くと、正規化と補正源は

$$
c\_a=1-16\pi^2a^4,\qquad \mathcal R\_a=c\_a/h\_a-1
$$

となる。補正源には貼り合わせの環状領域の外でも定数項が残るため、最終的な修正は多様体全体に及ぶ。

## 主結果

### 主定理（Theorem 1.1）

固定したモデルと背景の下で、$0<a\le2^{-2260}$なら、論文で指定する再帰により$u\_a=\sum\_{n\ge1}U\_{a,n}$が構成され、

$$
\omega\_a^{\mathrm{CY}}=\omega\_a^{\mathrm{bg}}+i\partial\bar\partial u\_a>0,
\qquad
\frac{(\omega\_a^{\mathrm{CY}})^3}{6}=(1-16\pi^2a^4)\mu,
\qquad \int\_Xu\_a\thinspace dV\_a=0
$$

を満たす。これは$\alpha\_a$内の一意な滑らかなRicci-flat計量である。

収束を測るcappedノルム空間を原論文の$E\_a$、逆作用素の定数を$M=2^{1120}$とすると、$n\ge1,N\ge0$で

$$
\Vert U\_{a,n}\Vert \_{E\_a}\le1728Ma^4(4/5)^n,
\qquad
\left\Vert u\_a-\sum\_{n=1}^{N}U\_{a,n}\right\Vert \_{E\_a}
\le8640Ma^4(4/5)^{N+1}
$$

を得る。さらに相対計量の打切り誤差は

$$
\left\Vert (\omega\_a^{\mathrm{bg}})^{-1}i\partial\bar\partial
\left(u\_a-\sum\_{n=1}^{N}U\_{a,n}\right)\right\Vert \_\infty
\le8640Ma(4/5)^{N+1}
$$

で抑えられ、背景との比較は

$$
\frac{23}{24}\omega\_a^{\mathrm{bg}}<\omega\_a^{\mathrm{CY}}
<\frac{25}{24}\omega\_a^{\mathrm{bg}}
$$

となる。$E\_a$の詳細な定義はDefinition 5.1に置かれるため、ここでは通常の一様ノルムと同一視しない。

区間の端点$2^{-2260}$は、このモデルと背景・ノルムで収束を保証する十分条件であり、最適性の主張ではない。また級数は各固定$a>0$での補正源の次数に関する展開で、各係数自体が$a$に依存する。

## 証明の見取り図

第一段階では、法方向の球面調和関数と接方向のFourierモード、動径の解作用素、平坦商の熱核を用いて背景の線形作用素の大域的逆を指定する。領域間の境界伝達を表す級数は、境界エネルギーノルムで縮小率$1/15$を持つ。

第二段階では、複素三次元のMonge–Ampère行列式の二次・三次項を用いて補正を再帰的に構成する。大域的な重み付き零階評価と、独立した六次元の局所Schauder評価を組み合わせ、線形逆の評価を非線形収束へ結び付ける。体積のずれは$a^4$であるが、非線形方程式は二次だけでなく三次項も含む点がKummer K3との違いである。

## 原論文との対応

- **Abstractページ:** [Explicit Ricci-flat metrics on a special Schoen threefold](https://arxiv.org/abs/2610.21932)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21932v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; equation (1.1)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21932v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
