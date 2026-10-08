---
layout: paper
title: Rigidity of complete K\"ahler--Einstein metrics under cscK perturbations
title_ja: 完全Kähler–Einstein計量のcscK摂動に対する剛性
authors: Zehao Sha
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: |-
  In this paper, we study constant scalar curvature K\"ahler (cscK) metrics on complete non-compact K\"ahler--Einstein manifolds. We give sufficient conditions under which a cscK perturbation of a K\"ahler--Einstein metric must remain K\"ahler--Einstein. As a model case, we prove that the Bergman metric on a bounded strictly pseudoconvex domain is K\"ahler--Einstein whenever it has constant scalar curvature. In particular, combined with Huang--Xiao's resolution of Cheng's conjecture, this yields the ball characterization for smooth bounded strictly pseudoconvex domains.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- csck-extremal-kahler-metrics
- noncompact-kahler-geometry
- uniformization
arxiv_id: 2510.13278v3
arxiv_url: https://arxiv.org/abs/2510.13278v3
arxiv_submitted: '2025-10-15'
arxiv_updated: '2026-10-06'
summary: |-
  完全非コンパクトKähler–Einstein多様体上で、定スカラー曲率を保つポテンシャル摂動が再びKähler–Einsteinとなる十分条件を与える。放物型性、またはスペクトルギャップと成長制御を用い、有界強擬凸領域のBergman計量についてもcscK性からKähler–Einstein性を導く。
abstract_en: ''
summary_en: |-
  On a noncompact manifold, constant scalar curvature does not by itself reproduce the rigidity available in a compact Kähler class. The author studies globally potential-defined perturbations of a complete negatively curved Kähler–Einstein metric. Two alternative analytic hypotheses force the perturbed metric to remain Kähler–Einstein. A second result treats natural metrics on strictly pseudoconvex domains and obtains a ball characterization from a cscK Bergman metric when the boundary is smooth.
abstract_ja: |-
  完全非コンパクトKähler–Einstein多様体上のcscK計量を調べ、ポテンシャルによる摂動がKähler–Einstein性を保つための十分条件を示す。モデルとなる有界強擬凸領域では、Bergman計量のスカラー曲率が一定ならその計量はKähler–Einsteinとなる。滑らかな境界を持つ場合、Huang–XiaoによるCheng予想の解決と合わせ、領域が単位球と双正則であることが従う。
abstract_source_url: https://arxiv.org/abs/2510.13278v3
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.13278v3](https://arxiv.org/abs/2510.13278v3)
- **著者:** Zehao Sha
- **初回投稿日:** 2025-10-15
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.DG（主分類）、math.CV（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトな場合、Kähler–Einstein計量と同じKähler類に属するcscK計量は再びKähler–Einsteinとなる。非コンパクトでは大域的な$\partial\bar\partial$補題が一般には使えず、同じような剛性を無条件に期待することはできない。

この論文は、固定した完全な背景計量を大域ポテンシャルで摂動する問題に絞る。負のKähler–Einstein計量を背景とし、摂動後も完全で同じ定スカラー曲率を持つ場合に、放物型性、またはスペクトルギャップを伴う定量的条件からKähler–Einstein性を導く。

さらに有界強擬凸領域の自然な完全計量を扱う。Bergman計量についてはcscK性だけからKähler–Einstein性を得て、境界が滑らかなら領域自体の球としての特徴づけへ進む。一般の完全非コンパクトcscK計量すべてがEinsteinになるという結論ではない。

## 背景と問題設定

複素次元$n$の完全Kähler–Einstein多様体$(M,\omega)$で$\operatorname{Ric}(\omega)=-\omega$と正規化する。摂動を$\omega_\varphi=\omega+\sqrt{-1}\partial\bar\partial\varphi$とし、$F$を対数体積比とすると、スカラー曲率$-n$のcscK条件は

<div>
$$
\omega_\varphi^n=e^F\omega^n,
\qquad
\Delta_{\omega_\varphi}F=n-\operatorname{tr}_{\omega_\varphi}\omega
$$
</div>

と表される。論文はこの連立方程式からEinstein条件へ戻るための解析的な制約を探る。

## 主結果

### 完全負曲率背景上の剛性（Theorem 1.2）

以下の共通条件の下で、二つの追加条件のいずれかが成り立てば$\omega_\varphi$はKähler–Einsteinとなる。背景$(M,\omega)$は完全Kähler–Einsteinでスカラー曲率$-n$、$\varphi\in C^\infty(M)$は$\sup_M\varphi=0$と正規化され、$\omega_\varphi$は完全cscKでスカラー曲率$-n$である。さらに$\operatorname{Ric}(\omega_\varphi)$が下に有界で、ある$\lambda>0$について$\omega_\varphi^n\ge\lambda\omega^n$を仮定する。

第一の追加条件は、$(M,\omega)$が放物型であること、すなわち正の最小Green関数を持たないことである。

第二は非放物型の場合の定量的条件である。$\|\varphi\|_{C^2(M,\omega)}<\infty$に加え、ある点$p$、$C_0>0$、および

<div>
$$
0\lt \delta\lt 2\sqrt{\lambda_1(-\Delta_{\omega_\varphi})}
$$
</div>

が存在して、すべての$R\ge1$で

<div>
$$
\int_{B_{\omega_\varphi}(p,2R)\setminus B_{\omega_\varphi}(p,R)}
|\varphi|^2\omega_\varphi^n\le C_0e^{2\delta R}
$$
</div>

を満たすことである。スペクトルの底$\lambda_1$と球の半径は、いずれも摂動後の計量$\omega_\varphi$で測る。正のスペクトルギャップだけを仮定して成長条件を省くことはできない。

### 定義関数による計量（Theorem 1.4(1)）

$\Omega\subset\mathbb C^n$を$C^2$境界を持つ有界強擬凸領域とする。強多重劣調和な定義関数$\rho\in C^\infty(\Omega)\cap C^4(\overline\Omega)$に付随する計量$\omega_\rho$がcscKで、Fefferman作用素について$J(\rho)=1$が$\partial\Omega$上で成立するなら、$\omega_\rho$はCheng–Yauの一意な完全Kähler–Einstein計量に一致する。

### Bergman計量と球の特徴づけ（Theorem 1.4(2)）

同じ領域のBergman計量$\omega_B$がcscKなら、$\omega_B$はKähler–Einsteinである。さらに$\partial\Omega$が$C^\infty$なら、

<div>
$$
\Omega\simeq\mathbb B^n
$$
</div>

という双正則同型を得る。最後の同定は、今回のcscKからEinsteinへの剛性と、既知のHuang–Xiaoの定理を組み合わせた帰結である。

## 証明の見取り図

放物型の場合には、正規化されたポテンシャル$\varphi$が背景計量に関して劣調和となることを用いる。非放物型の場合の中心量は$u=F-\varphi$で、これは$\omega_\varphi$調和関数となる。Introductionによれば、ポテンシャルの$C^2$有界性の下で$u$と$\varphi$の環状領域上の$L^2$成長条件が同値になるため、主定理を$\varphi$だけで記述できる。

二つの計量はこの状況で一様同値となるが、スペクトルの具体的な値と距離変数は計量に依存する。この点が定量的な閾値の記述で重要である。Ricci-flat背景についてはIntroductionのRemark 1.3が別の減衰条件による結果に言及するが、その後続節の詳細は補わない。

## 原論文との対応

- **Abstractページ:** [arXiv:2510.13278v3](https://arxiv.org/abs/2510.13278v3)
- **Introduction:** Section 1、pp. 1–4。
- **主結果:** Theorems 1.2・1.4、式(1.1)。
- **論文構成:** Introductionは一般のcscK摂動と強擬凸領域のモデルを分け、領域上の詳細はSection 5に置く。
- **確認バージョン:** v3。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
