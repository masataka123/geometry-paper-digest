---
layout: paper
title: Gromov-Hausdorff Convergence of Constant Scalar Curvature Kähler Metrics near the Canonical Class
title_ja: 標準類へ近づくcscK計量のGromov–Hausdorff収束
authors: Frederick Tsz-Ho Fong, Junbang Liu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: Let $X$ be a compact K\"ahler manifold with semi-ample canonical bundle. For any K\"ahler class $[\omega]$, Jian--Shi--Song proved that there exists a unique cscK metric in the class $2\pi c_1(K_X)+\varepsilon[\omega]$ when $\varepsilon \in (0,\varepsilon_0]$, using the properness criterion of Chen--Cheng. We prove that the cscK metrics in $2\pi c_1(K_X)+\varepsilon[\omega]$ converge, as $\varepsilon\downarrow0$, in the Gromov--Hausdorff topology to the metric completion of the twisted K\"ahler-Einstein metric on the canonical model of $X$ as conjectured by Jian--Shi--Song. Based on the technique developed in this paper, we can also give a new proof the theorem of Lee--Tosatti--Zhang on the Gromov-Hausdorff convergence of the normalized K\"ahler--Ricci flow on $X$.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- kahler-einstein-metrics
- metric-limits
- kahler-ricci-flow-solitons
- monge-ampere-equations
arxiv_id: 2610.21934v1
arxiv_url: https://arxiv.org/abs/2610.21934
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 標準束がsemi-ampleなコンパクトKähler多様体で、標準類へ近づくKähler類内のcscK計量の極限を同定する。特異ファイバーの外での計量収束と、標準モデル上のtwisted Kähler–Einstein計量の完備化へのGromov–Hausdorff収束を示す。
abstract_en: Let $X$ be a compact K\"ahler manifold with semi-ample canonical bundle. For any K\"ahler class $[\omega]$, Jian--Shi--Song proved that there exists a unique cscK metric in the class $2\pi c_1(K_X)+\varepsilon[\omega]$ when $\varepsilon \in (0,\varepsilon_0]$, using the properness criterion of Chen--Cheng. We prove that the cscK metrics in $2\pi c_1(K_X)+\varepsilon[\omega]$ converge, as $\varepsilon\downarrow0$, in the Gromov--Hausdorff topology to the metric completion of the twisted K\"ahler-Einstein metric on the canonical model of $X$ as conjectured by Jian--Shi--Song. Based on the technique developed in this paper, we can also give a new proof the theorem of Lee--Tosatti--Zhang on the Gromov-Hausdorff convergence of the normalized K\"ahler--Ricci flow on $X$.
summary_en: ''
abstract_ja: 標準束がsemi-ampleな連結コンパクトKähler多様体で、2πc1(KX)+ε[ω]に属するcscK計量を考える。εがゼロへ向かうと、正則なファイバー上では底のtwisted Kähler–Einstein計量と縮小されたRicci-flatファイバー計量の和へ収束する。大域的には底の標準計量の距離完備化へGromov–Hausdorff収束し、Kodaira次元ゼロの場合は一点へ潰れる。
abstract_source_url: https://arxiv.org/abs/2610.21934
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21934v1](https://arxiv.org/abs/2610.21934)
- **著者:** Frederick Tsz-Ho Fong, Junbang Liu
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.DG（主分類）; math.AP
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

標準束がsemi-ampleであれば、標準類に小さなKähler類を加えた類にcscK計量が存在する。この既知の存在結果に対して、本論文は小さな項をゼロへ近づけたときの計量の極限を決定する。

標準束が定める飯高ファイブレーションでは、一般ファイバーはCalabi–Yau多様体である。極限ではファイバー方向が潰れ、底にはtwisted Kähler–Einstein計量が残る。著者らは、特異ファイバーを避けた局所的な計量収束に加え、距離空間全体がその底の距離完備化へ収束することを示す。

既存の一様評価はGromov–Hausdorff前コンパクト性を与えていたが、全ての部分列極限を同じ標準空間へ同定するには追加の距離制御が必要である。本論文ではLipschitz関数の持ち上げ近似を使い、この大域的な同定を行う。その方法は正規化Kähler–Ricci flowの既知の収束定理にも別証明を与える。

## 背景と問題設定

$X$を連結コンパクトKähler多様体、$K\_X$をsemi-ampleとし、任意のKähler類$[\omega]$を固定する。十分小さい$\varepsilon>0$について

$$
[\omega\_\varepsilon]=2\pi c\_1(K\_X)+\varepsilon[\omega]
$$

に一意なcscK計量が存在することは、Chen–Chengのproperness判定に基づくJian–Shi–Songの結果である。

十分可除な$\ell$に対する$|\ell K\_X|$が定める写像を$f:X\to Y$とし、$m=\dim\_{\mathbb C}Y=\kappa(X)$とおく。$m>0$の場合、底の正則部分から判別集合を除いた$Y^\circ$上に

$$
\operatorname{Ric}(\omega\_{\mathrm{can}})=-\omega\_{\mathrm{can}}+\omega\_{\mathrm{WP}}
$$

を満たすtwisted Kähler–Einstein計量がある。$\omega\_{\mathrm{WP}}$はCalabi–YauファイブレーションのWeil–Petersson形式である。その距離完備化はコンパクトなRCD空間で、$Y$と同相になることが既知の結果として用いられる。

## 主結果

### 主定理（Theorem 1.1）

$m>0$のとき、cscK計量は特異ファイバーの外で底とファイバーの標準計量の和へ近づく。任意のコンパクト集合$K\Subset Y^\circ$について

$$
\left\Vert \omega\_\varepsilon-
\left(f^{\ast}\omega\_{\mathrm{can}}+\varepsilon\omega\_{\mathrm{SRF}}\right)\right\Vert
\_{f^{\ast}\omega\_{\mathrm{can}}+\varepsilon\omega}
\longrightarrow0
\quad\text{一様に }f^{-1}(K)\text{ 上で}
$$

となる。$\omega\_{\mathrm{SRF}}$はファイバー方向のRicci-flat計量を組み合わせたsemi-Ricci-flat形式である。特異ファイバーにまでこの局所的なテンソル収束を無条件に延長する主張ではない。

大域的には

$$
(X,d\_{\omega\_\varepsilon})\xrightarrow{\mathrm{GH}}
\overline{(Y^\circ,d\_{\mathrm{can}})}
$$

となる。右辺の上線は距離完備化を表す。これがJian–Shi–Songの予想に対する結論であり、部分列の取り方によらない極限を与える。

$m=0$の場合は、$[\omega]$のRicci-flat計量を$\omega\_{\mathrm{RF}}$として

$$
\omega\_\varepsilon=\varepsilon\omega\_{\mathrm{RF}},
\qquad
\operatorname{diam}(X,\omega\_\varepsilon)
=\sqrt\varepsilon\operatorname{diam}(X,\omega\_{\mathrm{RF}})\longrightarrow0
$$

となり、Gromov–Hausdorff極限は一点である。

## 証明の見取り図

まず既知のポテンシャルと正規化体積密度の一様評価、Sobolev不等式を使う。ファイブレーションに合わせた底方向の二階評価と、体積密度の対数の勾配評価を得る。Mabuchiエネルギーの最小性とMonge–Ampère測度の変分的特徴づけで弱極限を同定し、局所Moser反復で特異ファイバーの外の一様収束へ強める。

次に、Kähler–Ricci flow側の計量との比較から鋭いSchwarz型評価を導き、拡大議論と既存のcscK局所評価によって局所的な計量収束を得る。大域的収束には、底の1-Lipschitz関数を$X$上の滑らかな関数で近似し、そのLipschitz定数を$1+\delta$以下に保つ命題を用いる。これにより

$$
\sup\_{x,x'\in X}
\left(d\_{\mathrm{can}}(f(x),f(x'))-d\_{\omega\_\varepsilon}(x,x')\right)\_+
\longrightarrow0
$$

という一方向の距離比較を確立する。底のRCD構造と体積非崩壊がこの段階で重要となる。

## 原論文との対応

- **Abstractページ:** [Gromov-Hausdorff Convergence of Constant Scalar Curvature Kähler Metrics near the Canonical Class](https://arxiv.org/abs/2610.21934)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21934v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; equations (1.1)–(1.2)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21934v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
