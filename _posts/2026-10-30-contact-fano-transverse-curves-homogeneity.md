---
layout: paper
title: Transverse rational curves and the homogeneity of contact Fano manifolds
title_ja: 横断的有理曲線による接触Fano多様体の等質性
authors: Zhengyu Hu, Kefeng Liu, Xueyuan Wan
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that every smooth complex projective contact Fano manifold is homogeneous under its connected contact automorphism group. The argument extends and simplifies the incidence method of our earlier proof of the LeBrun--Salamon conjecture. After the classical reductions, balanced transverse rational maps through every point yield tangent sections extending across the nodal boundary. These establish irreducibility and nonlinearity of the general variety of minimal rational tangents associated with contact lines, enabling Hwang's descent theorem to produce global vector fields generating the tangent bundle. Consequences include very ampleness of the contact line bundle, embeddedness of every balanced rational map, K\"ahler--Einstein existence, K-polystability, and the LeBrun--Salamon conjecture.
topic: algebraic-geometry
tags:
- fano-varieties
- kahler-einstein-metrics
- k-stability
- positivity
- symplectic-contact-geometry
arxiv_id: 2610.38736v1
arxiv_url: https://arxiv.org/abs/2610.38736
arxiv_submitted: '2026-10-28'
arxiv_updated: '2026-10-28'
summary: 接触Fano多様体が必ず等質であるという分類問題を、有理曲線と大域ベクトル場から扱う論文である。著者らは接触自己同型群の推移性を主張し、接束の大域生成、Kähler–Einstein計量の存在、K-polystabilityをその帰結として導く。接触線束のample性が本質的であり、weak Fanoへの一般化は成立しない。
abstract_en: ''
summary_en: This paper approaches contact Fano classification by producing global infinitesimal symmetries from rational curves. Its argument distinguishes transverse degree-two maps from the contact lines used for descent. The introduction states homogeneity and derives metric and twistor consequences, while exhibiting a weak Fano example where the analogous conclusion fails.
abstract_ja: 本論文は、接触分布に横断的な有理曲線の変形から接ベクトル場を構成し、滑らかな複素射影接触Fano多様体の等質性を示すとする。接触直線の最小有理接方向の幾何を先に確立してからHwangの降下定理を適用する点が証明の中心である。Introductionでは、正のquaternionic–Kähler多様体の分類、接触線束の非常に豊富性、balancedな有理写像の埋め込み性が別々の帰結として整理されている。
abstract_source_url: https://arxiv.org/abs/2610.38736
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.38736v1](https://arxiv.org/abs/2610.38736)
- **著者:** Zhengyu Hu, Kefeng Liu, Xueyuan Wan
- **初回投稿日:** 2026-10-28
- **最終更新日:** 2026-10-28
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素射影多様体の接触構造は、接束の余次元一の部分束と、その上の非退化なLie括弧で記述される。接触線束がampleである場合、既知の等質多様体が基本例を与えるが、すべての接触Fano多様体がこの型に属するかが分類問題となる。

本論文は、滑らかな接触Fano多様体では連結接触自己同型群が推移的に作用するという定理を提示する。著者らは有理曲線から得られる局所的な接ベクトル場を大域化し、接束の各点の方向を大域ベクトル場で生成する方法を用いる。

等質性を得た後、Kähler–Einstein計量とK-polystability、正のquaternionic–Kähler多様体の分類、balancedな有理写像の埋め込み性が従う。これらは論文が主張する結果であり、本記事はIntroductionの説明を整理したもので、後続節の証明全体を検証したものではない。

## 背景と問題設定

$Y$を複素次元$2n+1$の滑らかな連結射影多様体とし、接触構造を

$$
0\longrightarrow D\longrightarrow TY\xrightarrow{\theta}L\longrightarrow0,\qquad -K\_Y=(n+1)L
$$

で表す。括弧による$\bigwedge^2D\to L$は非退化であり、Fano性は$L$のample性と同値になる。

正のquaternionic–Kähler多様体のtwistor空間は接触Fano多様体を与える。著者らの以前の仕事はこのtwistorの場合を扱っており、本論文は一般の接触Fano多様体への拡張を目指す。Introductionは同じ分類を述べる別のプレプリントとの共通部分と、最後の大域化の方法の違いも説明している。

## 主結果

### 接触自己同型群の推移性（Theorem 1.1）

滑らかな複素射影接触Fano多様体$(Y,D)$では、$\operatorname{Aut}(Y,D)^0$が$Y$に推移的に作用する。したがって$TY$は大域生成され、接触線束$L$は非常に豊富となる。複素次元3以上では、既知の等質接触多様体の分類と合わせ、単純複素Lie代数の随伴多様体としての記述につながる。

### 計量とtwistor幾何への帰結（Corollaries 1.2–1.3）

$Y$は有理等質多様体であり、正のRicci曲率を持つKähler–Einstein計量を許し、$(Y,-K\_Y)$はK-polystableとなる。また実次元$4n$、$n\ge2$のコンパクト連結な正のquaternionic–Kähler多様体は、計量の正の定数倍を除いてWolf空間になると述べられる。後者はtwistor空間への主定理の適用と、既知の分類・一意性を組み合わせる帰結である。

### Balancedな有理写像（Corollary 1.4）

$\dim Y=2n+1$で、$f:\mathbb P^1\to Y$が

$$
f^\ast TY\simeq\mathcal O(2)\oplus\mathcal O(1)^{\oplus2n}
$$

を満たすなら、$f$は閉埋め込みで、その像の法束は$\mathcal O(1)^{\oplus2n}$になる。各点を通るこのような曲線を、$\theta|\_{TC}:TC\to L|\_C$が同型になるように取れる。$n\ge1$ではtwistor submersionのファイバーとしての選択も述べられている。

### Ample性の必要性（Remark 1.5）

$S=\mathbb P^1\times\mathbb P^1$、$Y=\mathbb P(T^\ast S)$では、接触線束$L$はnefかつbigで$L^3=4$だがampleではない。反標準写像は一部の曲線を収縮するため$Y$は等質ではない。この例は、主定理のFano仮定をweak Fanoへ置き換えられないことを示す。

## 証明の見取り図

古典的な場合を除くと、Picard群が$L$で生成される高次元の場合が残る。二本の接触直線を平滑化して、$L$次数2のbalancedな横断写像を作る。この写像は接ベクトル場の構成に使い、$L$次数1の接触直線はVMRTを通した降下に使う。

二点テンソルの極を接触微分で打ち消し、節点境界を越えて接切断を延長する。接触直線の接方向の射影が滑らかでファイバーが既約、一般のVMRTが非線形であることを先に確認し、Hwangの定理で切断を大域ベクトル場へ降下する。この順序により、等質性を仮定せずに等質性を導く構成として説明されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.38736)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.38736v1) — Section 1, pp. 1–4（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollaries 1.2–1.4; Remark 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.38736v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
