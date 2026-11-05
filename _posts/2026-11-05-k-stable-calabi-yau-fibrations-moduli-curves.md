---
layout: paper
title: On boundedness and moduli spaces of K-stable Calabi-Yau fibrations over curves
title_ja: 曲線上のCalabi–Yauファイブレーションの有界性とK安定モジュライ
authors: Kenta Hashizume, Masafumi Hattori
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: We show boundedness of polarized Calabi--Yau fibrations over curves only with fixed volumes of general fibers and Iitaka volumes. As its application, we construct a separated coarse moduli space of K-stable Calabi-Yau fibrations over curves in an adiabatic sense [Hat22b] and show that all members (resp. smooth members) of the moduli are simultaneously uniformly K-stable (resp. have cscK metrics) for a certain choice of polarizations.
topic: algebraic-geometry
tags:
- moduli
- k-stability
- calabi-yau-geometry
- csck-extremal-kahler-metrics
- birational-geometry
arxiv_id: 2305.01244v2
arxiv_url: https://arxiv.org/abs/2305.01244v2
arxiv_submitted: '2023-05-02'
arxiv_updated: '2024-08-15'
summary: 曲線上のCalabi–Yauファイブレーションについて、一般ファイバーの体積と標準類の数値データを固定した有界性を証明する。これを用いて断熱的K安定性に対応する分離的モジュライを構成し、偏極の選択に関して一様なK安定性と滑らかな場合のcscK計量へつなげる。
abstract_en: ''
summary_en: The main moduli problem retains a relative polarization on a fibration over a curve rather than prescribing a single ample class on the total space. A boundedness theorem makes it possible to replace these relative data by controlled global polarizations. This supplies the finite-type input for separated moduli constructions. The introduction also explains how uniform choices in the adiabatic regime give stability and, for smooth total spaces, constant-scalar-curvature metrics.
abstract_ja: 曲線上のklt-trivialファイブレーションを、次元、境界の係数集合、一般ファイバー上の偏極の体積、標準類の基底方向の数値量によって制御する。全空間のlog有界性に加え、相対偏極の同値類を体積の有界な大域的豊富偏極で代表できることを示す。この結果と開性・分離性を用いて断熱的K安定ファイブレーションのモジュライを構成する。さらに一様な断熱パラメータの範囲でspecial K-stabilityを示し、滑らかな全空間についてcscK計量の存在を導く。
abstract_source_url: https://arxiv.org/abs/2305.01244v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2305.01244v2](https://arxiv.org/abs/2305.01244v2)
- **著者:** Kenta Hashizume, Masafumi Hattori
- **初回投稿日:** 2023-05-02
- **最終更新日:** 2024-08-15
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi–Yau型のファイバーを持つファイブレーションでは、全空間の偏極を固定するだけでなく、基底方向とファイバー方向の大きさを変えて幾何を見ることが自然である。本論文は曲線を基底とする場合を扱い、断熱的K安定性、有界性、モジュライ空間を一つの枠組みにまとめる。

核心は、一般ファイバー上の偏極の体積と標準類の数値データから全空間の有界性を得ることである。相対的に豊富な偏極を出発点にし、基底からの引き戻しで調整することで、大域的に豊富で体積も有界な代表を選べる。最初から全空間上の豊富偏極の体積を固定する問題より柔軟な設定である。

この有界性に開性と分離性を組み合わせ、断熱的K安定なファイブレーションの分離的な有限型モジュライを構成する。さらに族全体に共通の小さな断熱パラメータを選べることを示し、滑らかな全空間については適切な偏極類に定スカラー曲率Kähler計量が存在することへ結び付ける。

## 背景と問題設定

$f:(X,\Delta)\to C$を曲線上のklt-trivialファイブレーションとする。次元$d$、DCC条件を満たす境界係数集合$\Theta\subset\mathbb Q$、$v>0$と$u\in\mathbb Q$を固定し、次数1の線束$H$と相対豊富な$\mathbb Q$-Cartier Weil因子$A$について

$$
K\_X+\Delta\equiv u f^\ast H,
\qquad (f^\ast H\cdot A^{d-1})=v
$$

を課す。後者は一般ファイバー上の偏極の体積を表す。Introductionの集合$D\_{d,\Theta,v,u}$では$A$を基底上の相対線形同値で割る。$G\_{d,\Theta,v,u,w}$は同じ条件のもとで$A$が大域的に豊富、かつ$\operatorname{vol}(A)\leq w$となる対象である。

K安定モジュライの構成には、対象の有界性、族の中での安定性の開性、極限の分離性が必要となる。本論文では通常のK安定性に加えて、ファイバー方向の寄与を小さくする断熱的K安定性と、それより精密な一様性を扱う。

## 主結果

### 有界性と偏極の代表の選択（Theorem 1.5）

上の数値データを固定すると、$D\_{d,\Theta,v,u}$に現れる対$(X,\Delta)$はlog有界である。さらにこれらのデータだけに依存する$w>0$が存在し、自然な写像

$$
G\_{d,\Theta,v,u,w}\longrightarrow D\_{d,\Theta,v,u}
$$

は全射になる。したがって相対偏極の各同値類は、全空間上で豊富かつ体積が一様に有界な偏極で代表できる。単に多様体の有界性を示すだけでなく、モジュライ構成に利用できる偏極まで整える点が重要である。

### 分離的モジュライの構成（Theorems 1.2–1.4）

Introductionでは概略として、曲線上の一様断熱的K安定なklt-trivialファイブレーションに分離的な有限型粗モジュライが存在すると述べられる。精密な構成では境界を零とし、標準類の係数$u$と偏極の扱いにより二つの場合を区別する。

Theorem 1.3は$u<0$の場合に、所定の反多重標準束の指数$r$を選んだモジュライ関手が有限型の分離的Deligne–Mumfordスタックとなり、粗モジュライ空間を持つとする。偏極は基底からの線束の引き戻しによる差を許して同一視する。Theorem 1.4では$u\neq0$とし、大域的豊富偏極と体積上界$w$を指定し、偏極自体を保存する同型を使う。こちらも同種のスタックと粗モジュライを得る。族にはIntroductionに記載された反射的多重標準束の可逆性、基底変換などの条件が課されており、単なる全ファイブレーションの集合に対する無条件の構成ではない。

$u>0$の場合には、飯高次元1のklt good minimal modelの飯高ファイブレーションのモジュライが含まれる。二つの構成は偏極の同型の意味が異なるため、同じモジュライとして混同しない。

### 断熱領域での一様K安定性（Theorem 1.6）

$d,\Theta,u,v,w$にのみ依存する$\epsilon\_0>0$が存在し、$G\_{d,\Theta,v,u,w}$のすべての対象に対して

$$
0<\epsilon<\epsilon\_0,
\qquad L\_\epsilon=\epsilon A+f^\ast H
$$

という有理数$\epsilon$の範囲で$(X,\Delta,L\_\epsilon)$はspecially K-stableになる。これは一様K安定性より強い条件であり、各対象ごとに別々の小ささを選ぶだけではなく、族に共通の範囲を与える。

また共通の$\alpha>0$により、正規な半豊富テスト配位$(\mathcal X,\mathcal M)$について

$$
M\_\Delta^{\mathrm{NA}}(\mathcal X,\mathcal M)
\geq\alpha (J^{L\_\epsilon})^{\mathrm{NA}}(\mathcal X,\mathcal M)
$$

が成り立つ。ここで$M^{\mathrm{NA}}$は非Archimedes的Mabuchi汎関数であり、右辺は論文の偏極依存の$J$汎関数である。

### cscK計量への帰結（Corollary 1.7）

$d,\Theta,u,v$だけに依存する$w>0$が存在する。$D\_{d,\Theta,v,u}$の任意の代表と一般ファイバー$F$に対して、有理数$t$が

$$
\operatorname{vol}(A+tF)\geq w
$$

を満たせば$(X,\Delta,A+tF)$はspecially K-stableとなる。さらに$X$が滑らかで$\Delta=0$なら、$c\_1(A+tF)$にcscK計量が存在する。有界性定理の代表を選ぶ体積上界と、ここで偏極を基底方向へ動かす際の体積下界は役割が異なる。

## 証明の見取り図

まずCartier指数を一様に抑え、一般ファイバーの不変量と半正値性を使って、相対偏極に基底方向の因子を加減し大域的豊富性と体積上界を得る。Birkarの有界性理論が全空間のlog有界性を支える。

次に基底側の$\delta$不変量の下半連続性を通じて安定性の開性を扱い、分離性と（反）多重種数の不変性を整え、モジュライ構成へ進む。最後に有限個のlog $\mathbb Q$-Gorenstein族を用い、$J$安定性や$\delta$不変量の一様収束から断熱的K安定性の共通範囲を得る。計量の存在には、special K-stabilityとcscK計量を結ぶ既知の結果を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2305.01244v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2305.01244v2) — Section 1, pp. 1–8（Section 2の直前まで）
- **Introduction中で言及された主要結果:** Theorems 1.2–1.6, Corollary 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2305.01244v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
