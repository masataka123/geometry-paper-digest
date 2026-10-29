---
layout: paper
title: 'Pluriclosed 3-folds with vanishing Bismut Ricci form: General theory in the quasi-regular case'
title_ja: 準正則Bismut Ricci平坦3次元多様体の横断Kähler幾何
authors: Vestislav Apostolov, Abdellah Lahdili, Kuan-Hui Lee
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We study compact complex $3$-dimensional non-K\"ahler Bismut Ricci flat pluriclosed Hermitian manifolds (BHE) via their dimensional reduction to a special K\"ahler geometry in complex dimension $2$, recently obtained by Barbaro, Streets and the first and third authors. We show that in the quasi-regular case, the reduced geometry satisfies a 6th order non-linear PDE which has infinite dimensional momentum map interpretation, similar to the much studied K\"ahler metrics of constant scalar curvature (cscK). We use this to associate to the reduced manifold or orbifold Mabuchi and Calabi functionals, as well as to obtain obstructions for the existence of solutions in terms of the authomorphism group, paralleling results by Futaki and Calabi-Lichnerowicz-Matsushima in the cscK case. This is used to characterize the Samelson locally homogeneous BHE geometries in complex dimension 3 as the only non-K\"ahler BHE $3$-folds with $2$-dimensional Bott-Chern $(1,1)$-cohomology group, for
  which the reduced space is a smooth K\"ahler surface. We also discuss explicit solutions of the PDE on orthotoric K\"ahler orbifold surfaces, extending examples found by Couzens-Gauntlett-Martelli-Sparks in the framework of supersymmetric ${\rm AdS}_3 \times Y_7$ type IIB supergravity. Our construction yields infinitely many non-K\"ahler BHE structures on $S^3\times S^3$ and $S^1\times S^2 \times S^3$, which are not locally isometric to a Samelson geometry. These appear to be the first such examples.
topic: differential-geometry
tags:
- curvature
- foliations
arxiv_id: 2601.04937v3
arxiv_url: https://arxiv.org/abs/2601.04937
arxiv_submitted: '2026-01-08'
arxiv_updated: '2026-10-25'
summary: 非KählerなBismut Ricci平坦pluriclosed複素3次元多様体を、準正則葉層の商上のKähler方程式で調べる。運動量写像による存在障害と正則な場合の剛性を示す一方、球面の積上に非局所等質な例を無限個構成する。
abstract_en: ''
summary_en: The paper studies a special Hermitian geometry through the Kähler geometry transverse to its canonical torus foliation. In the quasi-regular setting, the reduced equation acquires a moment-map interpretation and associated symmetry obstructions. A rigidity theorem singles out locally homogeneous models under a small Bott-Chern cohomology hypothesis and regularity of the foliation. Orbifold constructions also produce infinite families that escape this homogeneous class.
abstract_ja: Bismut接続のRicci形式が消えるpluriclosed Hermitian計量を持つ、コンパクト非Kähler複素3次元多様体が対象である。準正則な場合に横断Kähler幾何を支配する6階非線形方程式を運動量写像として捉え、汎関数と自己同型群に基づく存在障害を導く。正則性とBott–Chernコホモロジーの次元条件の下でSamelson幾何を特徴づけるとともに、オービフォールドを用いて局所Samelson型ではない無限族を構成する。
abstract_source_url: https://arxiv.org/abs/2601.04937
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.04937v3](https://arxiv.org/abs/2601.04937)
- **著者:** Vestislav Apostolov, Abdellah Lahdili, Kuan-Hui Lee
- **初回投稿日:** 2026-01-08
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler条件を外したHermitian幾何では、どの曲率条件を標準計量の指標とするかが問題になる。本論文は、pluriclosed条件とBismut Ricci平坦条件を同時に課したBHE計量を、コンパクト複素3次元で研究する。

既知の次元縮約により、非KählerなBHE多様体には2次元トーラス方向の標準的葉層が現れる。葉が閉じる準正則の場合、その商はKähler曲面またはオービフォールドとなる。著者らは商上の6階方程式に運動量写像の解釈を与え、cscK幾何と並行する汎関数や自己同型群による障害を導く。

この枠組みは剛性と新例の両方を生む。商が滑らかでBott–Chernの$(1,1)$コホモロジーが2次元という条件では局所Samelson幾何に限られる。一方、商にオービフォールドを許すと、$S^3\times S^3$や$S^1\times S^2\times S^3$上に局所等質でないBHE構造の無限族が得られる。

## 背景と問題設定

BHEとはBismut–Hermitian–Einsteinの略で、本論文ではBismut Ricci形式が消えるpluriclosed構造を指す。既知の縮約では、横断Kähler形式$\omega$、そのRicci形式$\rho$、閉じた実$(1,1)$形式$\theta$、正のスカラー曲率$R$に対して

$$
\frac12 dd^cR\wedge\omega=\theta^2+\rho^2,\qquad R>0
$$

という方程式が現れる。著者らはこれを一般のKähler次元へ拡張し、Kähler類$[\omega]=2\pi\alpha$と原始的な類$\beta$に対応する調和形式$\theta$を用いる。問題は曲率の消滅だけでなく、この高階方程式がどの幾何学的原理に従うかにある。

## 主結果

### 運動量写像と存在障害（Theorem 1.2、Corollary 1.3）

縮約を一般化した方程式は、適切な無限次元空間上の運動量写像の零点として理解できる。その方程式は

$$
\Delta\_\varphi R\_\varphi+\frac{R\_\varphi^2}{2}-\Vert \operatorname{Rc}\_\varphi\Vert ^2-\Vert \theta\_\varphi\Vert ^2=c\_{\alpha\beta},\qquad R\_\varphi>0,
$$

$$
c\_{\alpha\beta}=2n(n-1)\frac{(c\_1(M)^2+\beta^2)\cdot\alpha^{n-2}}{\alpha^n},\qquad \beta\cdot\alpha^{n-1}=0
$$

である。これに対応するMabuchi型・Calabi型汎関数とFutaki型不変量が得られ、解の存在は関連する自己同型群の還元性などを要求する。cscKの場合との類似は、BHEの商幾何にも対称性に由来する障害があることを意味する。一般的な安定性との同値を確立したという主張ではない。

### 正則な場合のSamelson型の特徴づけ（Theorem 1.4）

コンパクト非Kähler BHE複素3次元多様体で$h^{1,1}\_{BC}=2$とし、標準トーラス葉層が正則、すなわち自由なトーラス作用による滑らかな商を持つ場合を考える。この場合は、$\mathrm{SU}(2)\times\mathrm{SU}(2)$または$\mathrm{SU}(2)\times\mathbb R^3$により被覆されるSamelson幾何として特徴づけられる。ここで正則性は本質的であり、準正則性だけから同じ結論を述べることはできない。

### 非Samelson型の無限族（Theorems 1.5、1.6）

$S^1\times S^2\times S^3$と$S^3\times S^3$には、$h^{1,1}\_{BC}=2$を満たす非Kähler BHE構造の可算無限族が存在する。これらは準正則であるが局所Samelson型ではない。横断スカラー曲率が非定数となる構成は、上の正則な剛性定理と対照をなす。

## 証明の見取り図

Introductionの方針は、既知の次元縮約を出発点に、横断Kähler方程式の変分構造を取り出すものである。運動量写像の枠組みから対称性に関する必要条件を導き、正則な場合の分類に利用する。新例の構成ではorthotoric Kählerオービフォールド上の明示解を使い、商に有限等方群を許す自由度を利用する。後続節の計算や構成の証明全体は本記事の確認範囲外である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2601.04937)
- **Introduction:** [PDF](https://arxiv.org/pdf/2601.04937v3) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.4–1.6、Corollary 1.3（Theorem 1.1は既知の次元縮約）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2601.04937v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
