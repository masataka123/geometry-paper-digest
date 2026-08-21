---
layout: paper
title: "Disproof of the Yau--Tian--Donaldson conjecture"
title_ja: "Yau--Tian--Donaldson予想の反例"
authors: "Jihao Liu"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  We construct a polarized smooth projective fivefold and prove that it is K-polystable but does not admit a constant scalar curvature Kähler metric. This disproves the Yau--Tian--Donaldson conjecture for constant scalar curvature metrics. The main result of this paper was obtained using generative AI, particularly GPT-5.6-sol, Fable 5, and the Danus system. A detailed report on the use of generative AI in this paper is enclosed in the appendix, joint with Bin Dong and Guoxiong Gao.
topic: differential-geometry
tags:
  - k-stability
  - csck-extremal-kahler-metrics
  - vector-bundles-sheaves
arxiv_id: "2608.19301v1"
arxiv_url: "https://arxiv.org/abs/2608.19301"
arxiv_submitted: "2026-08-19"
arxiv_updated: "2026-08-19"
summary: >-
  偏極された滑らかな射影5次元多様体で、K-polystableでありながらextremal Kähler計量をもたないという反例を構成する。通常のDonaldson--Futaki不変量によるK-polystabilityとcscK計量の存在を同値とするYau--Tian--Donaldson予想を否定し、uniformな安定性条件との隔たりを具体化する。
abstract_en: ""
summary_en: >-
  The paper gives an explicit smooth polarized projective fivefold that satisfies Donaldson--Futaki K-polystability for normal ample test configurations while admitting no extremal Kähler metric in the polarization class. It constructs the variety as a projective bundle over a product of four curves with carefully selected genera and line-bundle degrees. A classification of zero-invariant configurations supplies the required product rigidity, whereas a sequence governed by Fibonacci approximations shows that no positive uniform relative stability margin exists. Thus the example separates ordinary K-polystability from both the cscK existence problem and uniform relative K-polystability.
abstract_ja: >-
  本論文は、K-polystableである一方、その偏極類に定スカラー曲率Kähler計量をもたない滑らかな射影5次元多様体を構成する。これにより、定スカラー曲率計量に関するYau--Tian--Donaldson予想への反例を与える。主結果の獲得にはGPT-5.6-sol、Fable 5、Danus systemを中心とする生成AIが用いられ、その利用についてBin Dong、Guoxiong Gaoとの共同付録で詳しく報告される。
abstract_source_url: "https://arxiv.org/abs/2608.19301"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.19301](https://arxiv.org/abs/2608.19301)
- **著者:** Jihao Liu
- **初回投稿日:** 2026年8月19日
- **最終更新日:** 2026年8月19日（v1）
- **主分類・副分類:** math.DG（主分類）, math.AG, math.CV
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

定スカラー曲率Kähler（cscK）計量をめぐるYau--Tian--Donaldson予想は、偏極多様体のK-polystabilityとcscK計量の存在を結び付ける。Fanoの場合や、uniformまたはcompleted K-stabilityを使う変種には肯定的な理論があるが、一般の偏極多様体に対する通常のDonaldson--Futaki型K-polystabilityでは十分性が問題として残っていた。

本論文は、4本の曲線の積を底とする射影束として滑らかな偏極5次元多様体 $(X,A)$ を具体的に構成する。この $(X,A)$ は、すべての正の指数とすべての正規ample test configurationに対してDonaldson--Futaki不変量が非負であり、零になるものは積型に限られる。それにもかかわらず、$c_1(A)$ はextremal Kähler計量を含まず、したがってcscK計量も含まない。

反例の鍵は、非代数的な退化を生む無理数の重根をもつadmissible boundary polynomialと、代数的test configurationを漏れなく扱う零不変量の場合の剛性を両立させる点にある。4次元の底と大きな種数・次数を選ぶことで、従来の候補例では未解決だった全test configurationに対するK-polystabilityを証明可能にする。

さらに、有理Fibonacci近似から得られる非積型test configurationの列に沿って、reduced Donaldson--Futaki quotientが0へ近づく。従って例はuniformly relatively K-polystableではなく、反例がFano版やuniform版の対応を否定するものではないことも明確にされる。

## 背景と問題設定

偏極多様体 $(X,A)$ がcscK計量をもつための代数的条件としてK-stabilityを用いる構想は、Yau、Tian、Donaldsonに由来する。Introductionによれば、必要性の方向には多くの結果がある一方、十分性については解析的なpropernessと存在の対応、および安定性概念の完成化・uniform化が発展してきた。本論文が反例を与えるのは、正規ample test configurationとDonaldson--Futaki不変量に基づく通常のK-polystabilityによる一般偏極版である。

構成は

$$
B=\prod_{i=0}^{3}C_i,\qquad M=\boxtimes_{i=0}^{3}M_i,\qquad L=\boxtimes_{i=0}^{3}L_i,
$$

$$
\pi:X=\mathbb{P}_B(\mathcal{O}_B\oplus L)\longrightarrow B,\qquad A=\mathcal{O}_X(1)\otimes\pi^*M
$$

という射影束である。曲線の種数は $(3846511,10591,76,46)$、$M_i$ の次数は $(461999,13962,1068,260)$、$L_i$ の次数は $(13397971,-11635,-712,-104)$ と選ばれる。また $i\ne j$ に対して $\operatorname{Hom}(\operatorname{Pic}^0(C_i),\operatorname{Pic}^0(C_j))=0$ を課し、任意の代数的test configurationを分類するための剛性を確保する。

## 主結果

### 反例（Theorem A）

上のデータから得られる $(X,A)$ は、K-polystableであるがextremal Kähler計量をもたない滑らかな偏極射影5次元多様体である。より具体的には、$\operatorname{Aut}^0(X)=\mathbb{C}^*$ が射影束のファイバーをスケーリングし、任意の正の整数 $e$ と任意の正規ample test configuration $\mathcal{T}$ に対して

$$
\operatorname{DF}(\mathcal{T})\geq 0
$$

が成り立つ。等号は、ファイバー・スケーリングの整数1パラメーター部分群と偏極上のスカラー指標から生じる偏極積型の場合に限る。一方、$c_1(A)$ にはextremal Kähler計量がなく、特にcscK計量がない。

これは一般偏極版Yau--Tian--Donaldson予想への明示的な反例である。ただし、Introductionは(log) Fano版、およびuniform・completed K-stabilityを用いるcscK版は影響を受けないと明記する。また、この例の自己同型群は無限であり、$\operatorname{Aut}^0(X)$ が自明または有限の場合は問題として残る。

### 零不変量test configurationの分類（Theorem B）

Theorem Aの $(X,A)$ に対し、Donaldson--Futaki不変量が0である任意の正規ample test configurationは積型である。切断空間のブロック

$$
V_{em,j}=H^0(B,M^{em}\otimes L^j)
$$

上で、その増大filtrationの唯一のjumpは、ある整数 $\alpha,\beta$ を用いて $\alpha m+\beta j$ と書ける。これはファイバー・スケーリングとスカラー指標が与えるweightそのものであり、特定の例について零不変量の場合のproduct rigidityを、同変性を仮定せずに確立する。

### uniform安定性からの分離（Theorem C）

Fibonacci数列 $Q_0=0,Q_1=1,Q_{n+1}=Q_n+Q_{n-1}$ を用い、$p_n=Q_n$, $q_n=Q_{n+2}$, $\mu_n=p_n/q_n$ と置く。Introductionでは、十分割り切れる指数について非積型の正規 $\mathbb{C}^*$-同変test configuration $\mathcal{T}_n$ が構成され、そのfiltration entryは

$$
\max\{0,q_nj-p_nr_nk\}
$$

で与えられる。$\mu_n$ は $\lambda=(3-\sqrt5)/2$ に収束し、

$$
\inf_{n\geq 3}\frac{\operatorname{DF}(\mathcal{T}_n)}{J^{\mathrm{NA}}_{\mathbb{C}^*}(\mathcal{T}_n)}=0
$$

となる。従って通常のK-polystabilityには正のuniform marginがなく、$(X,A)$ はuniformly relatively K-polystableではない。

## 証明の見取り図

非存在部分では、admissible boundary polynomialがただ一つの無理数の内点重根をもつようにデータを選ぶ。スカラー曲率誤差が0へ近づく滑らかなadmissible metricとDonaldsonの下界からK-semistabilityを得る一方、extremal metricが存在すると仮定すれば、同変性と一意性を通じてexplicit profileへ還元できる。極限profileの内点零点で非零のファイバー・スケーリングベクトル場の長さが0になるという矛盾から、extremal metricの非存在を導く。

K-polystabilityへの強化では、Donaldson--Futaki不変量0の任意の正規test configurationのfiltrationを、ファイバー・スケーリングの二方向へspecializeする。二つのconvex transformがファイバー座標について同じ有理係数のaffine関数になることを示し、分岐base change後に整数積型test configurationと比較する。section algebraのjumpが一致することと丸め誤差の排除により、元のconfiguration自体が積型であると結論する。

Theorem Cは別の明示計算による。無理数の重根をFibonacci比で近似するとDonaldson--Futaki不変量は分母に関して3次で減衰するのに対し、reduced non-Archimedean $J$-functionalは1次の大きさを保つため、その比が0へ収束する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.19301](https://arxiv.org/abs/2608.19301)
- **Introduction:** Section 1, pp. 1–8
- **Introduction中で言及された主要定理番号:** Theorems A, B, C; Corollaries 1.5, 1.6
- **論文構成の説明:** Section 1.8, p. 8
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
