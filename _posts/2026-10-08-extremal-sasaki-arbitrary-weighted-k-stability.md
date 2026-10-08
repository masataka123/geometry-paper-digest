---
layout: paper
title: Extremal Sasaki manifolds and weighted K-stability
title_ja: 重みの対数凹性を仮定しないextremal Sasaki計量と重み付きK安定性
authors: Simon Jubert, Chung-Ming Pan
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We remove the log-concavity assumption on the weight in the analytic weighted Yau--Tian--Donaldson correspondence established in [arXiv:2406.10939, arXiv:2407.09929, arXiv:2503.22183] and discuss applications to Sasaki and conformally K\"ahler Einstein--Maxwell geometries.
topic: differential-geometry
tags:
- k-stability
- csck-extremal-kahler-metrics
- kahler-ricci-flow-solitons
arxiv_id: 2610.10216v1
arxiv_url: https://arxiv.org/abs/2610.10216v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  重み付きextremal Kähler計量の存在とMabuchi汎関数のcoercivityの対応から、重みに対する対数凹性の仮定を取り除く。Chern–Lu不等式による積分Laplacian評価を用い、任意の正の重みに対する重み付きYau–Tian–Donaldson対応と、irregularな場合を含むextremal Sasaki構造への応用を得る。
abstract_en: ''
summary_en: |-
  Weighted extremal equations connect canonical Kähler metrics to geometric problems whose natural weights need not be log-concave. This paper supplies integral estimates using the Chern–Lu inequality so that the existence argument can work without that restriction. The resulting equivalence identifies existence with relative coercivity of a weighted Mabuchi functional. In the polarized setting it also gives a stability criterion, which the authors apply to a specified family of Sasaki structures.
abstract_ja: |-
  論文は、解析的な重み付きYau–Tian–Donaldson対応で従来必要とされた重みの対数凹性を除く。鍵は重み付きcscK方程式の積分Laplacian評価を新たに得ることである。この改善をSasaki幾何および共形Kähler Einstein–Maxwell幾何に応用する。
abstract_source_url: https://arxiv.org/abs/2610.10216v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.10216v1](https://arxiv.org/abs/2610.10216v1)
- **著者:** Simon Jubert, Chung-Ming Pan
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

重み付きextremal Kähler計量は、通常のextremal計量やソリトン、Sasaki幾何の問題を共通の方程式として扱う枠組みである。ただし従来の存在理論では、重みの対数凹性が解析的な評価を閉じるために用いられていた。幾何から自然に現れる重みは、この条件を満たすとは限らない。

著者らは、Chern–Lu不等式から積分Laplacian評価を得ることで、その制限を取り除く。これにより、重み付きextremal計量の存在と、対応する相対Mabuchi汎関数のcoercivityの同値性が、任意の滑らかな正の重みに拡張される。

偏極がある場合には相対一様重み付きK安定性との対応が従い、regularなSasaki商を通じて、irregularなReeb場を持ちうるSasaki構造にも応用される。すべてのSasaki多様体を一括して分類する定理ではなく、Introductionで定めた変形族における存在判定である。

## 背景と問題設定

<div>
$X$をコンパクトKähler多様体、$T\subset\operatorname{Aut}_{\mathrm{red}}(X)$をコンパクトトーラス、$\alpha$をKähler類とする。モーメント写像を整合的に正規化すると、$T$不変計量に共通するモーメント多面体$P_\alpha$が得られる。正の重み$v,w$と相対extremalアフィン関数$\ell^{\mathrm{ext}}_{v,w}$に対し、求める方程式は
</div>

<div>
$$
\operatorname{Scal}_v(\omega)
=\bigl(\ell^{\mathrm{ext}}_{v,w}w\bigr)(m_\omega).
$$
</div>

従来のAubin–Yau型評価では$\log v$のHessianの符号が重要だった。Sasakiの応用では対数凸な重みも現れるため、その符号条件を取り除くことに幾何的な意味がある。

## 主結果

### 積分Laplacian評価（Theorem A／Theorem 2.1）

固定した参照計量$\omega\in\alpha$に対し、方程式を解く$T$不変な$(v,w)$-extremal計量$\widehat\omega$の両方向のトレースを積分評価する。Introductionに記載された評価は、$p\ge1$に対して

<div>
$$
\|\operatorname{tr}_{\widehat\omega}\omega\|_{L^{2p+2}(\omega^n)}\le C_p,
\qquad
\|\operatorname{tr}_\omega\widehat\omega\|_{L^{(2p+2)/(n-1)}(\omega^n)}\le C_p.
$$
</div>

後者は$n>1$の場合の表示である。定理は重み$v$の対数凹性を要求せず、Introductionでは$C_p$が解$\widehat\omega$に依存しない形で述べられている。これは後の連続法を支える解析的な入力である。

### 存在とcoercivityの同値性（Theorem B）

$P_\alpha$上の滑らかな正の重み$v,w$に対し、$\alpha$内に$(v,w)$-extremal Kähler計量が存在することと、相対重み付きMabuchi汎関数が$T^{\mathbb C}$に関してcoerciveであることは同値である。後者は、ある$\sigma,C>0$について、すべての$T$不変Kähler計量$\widehat\omega\in\alpha$が

<div>
$$
\mathcal M^{\mathrm{rel}}_{v,w}(\widehat\omega)
\ge\sigma\inf_{\gamma\in T^{\mathbb C}}J(\gamma^\ast\widehat\omega)-C
$$
</div>

を満たすという条件である。存在からcoercivityへの向きは既知であり、新しい評価が逆向きの対数凹性の制限を解消する。

### 重み付きYTD対応（Corollary C）

$\alpha=2\pi c_1(L)$で$L$が豊富な直線束なら、上の存在条件は$T$相対一様$(v,w)$重み付きK安定性とも同値になる。Introductionで採用される安定性の条件は、ある$\lambda>0$について、任意の$T$同変でdominatingな滑らかなtest configuration$(\mathcal X,\mathcal A)$に対し

<div>
$$
\operatorname{DF}^{\mathrm{rel}}_{v,w}(\mathcal X,\mathcal A)
\ge\lambda J^{\mathrm{NA}}_{T^{\mathbb C}}(\mathcal X,\mathcal A)
$$
</div>

が成立することである。$J^{\mathrm{NA}}_{T^{\mathbb C}}$はreduced non-Archimedean $J$汎関数である。既存の代数的対応とTheorem Bを組み合わせた帰結として説明される。

### Sasaki構造への応用（Corollary D／Corollary 4.7）

regularなSasaki構造$\chi$を固定し、それと可換な、irregularでもよいReebデータ$\xi$を取る。Apostolov–Calderbankの構成による族$\mathcal S_\chi(\xi^D)$にextremal Sasaki構造が存在することと、regular商$(X_\chi,[\omega_\chi])$が$T$相対一様$(v_\xi,w_\xi)$重み付きK安定であることは同値である。固定された商上の重み付き問題を通じて、葉空間が扱いにくいirregularな場合を研究できる。

## 証明の見取り図

Chern–Lu型評価では、重みのHessianを含む項の一部を固定した背景計量で制御し、残りをトレースの重み付きLaplacianに現れる項で補償する。このため$\log v$のHessianの符号を仮定せずに済む。その代わり、積分評価へ至る解析は通常のAubin–Yau型の議論より繊細になる。

通常の方程式に加えて、連続法に現れるtwisted方程式にも評価を用意し、既存の連続法からTheorem Bを得る。Introductionはさらに、同じChern–Luの方法がFano多様体上の重み付きKähler–Ricciソリトンに対する直接のLaplacian評価も与えると説明する。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.10216v1](https://arxiv.org/abs/2610.10216v1)
- **Introduction:** pp. 1–5。
- **主結果:** Theorems A・B、Corollaries C・D、式(0.1)。
- **論文構成:** Section 2で主要評価と存在対応、Section 3でソリトン、Section 4でSasaki・Einstein–Maxwell幾何への応用を扱う。後者の個別定理はIntroductionで詳述されていないため補わない。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
