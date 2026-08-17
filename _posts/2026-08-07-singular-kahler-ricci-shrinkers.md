---
layout: paper
title: "Singular Kähler-Ricci Shrinkers are Complex Analytic"
title_ja: "特異Kähler--Ricci収縮ソリトンの複素解析構造"
authors: "Max Hallgren, Junsheng Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  We prove that any singular Kähler--Ricci shrinker $X$ arising as a noncollapsed limit of
  Kähler--Ricci flows admits a natural structure of a locally algebraic complex-analytic variety with
  log terminal singularities. We then derive several geometric consequences: $X$ is simply connected,
  has a unique end, has unique tangent cones at every point, and is a smooth orbifold outside a subset
  of complex codimension at least three. As a further application, we prove a new long-time
  pseudolocality theorem for almost-selfsimilar Kähler--Ricci flows.
topic: differential-geometry
tags:
  - singularities
  - kahler-ricci-flow-solitons
  - curvature
  - metric-limits
  - complex-analytic-spaces
arxiv_id: "2605.25213v1"
arxiv_url: "https://arxiv.org/abs/2605.25213"
arxiv_submitted: "2026-05-24"
arxiv_updated: "2026-05-24"
summary: >-
  非崩壊Kähler--Ricci流の極限として現れる特異収縮ソリトンに、標準的なklt複素解析多様体構造が入ることを証明する。接錐の一意性、単連結性、一端性、余次元3以上を除くorbifold正則性も導き、計量極限を複素・代数幾何の対象として扱えるようにする。
abstract_en: ""
summary_en: >-
  The authors study singular shrinking Kähler--Ricci solitons obtained as noncollapsed limits of Kähler--Ricci flows. They construct a canonical normal analytic-space structure and show that its singularities are log terminal, while the soliton form extends as a controlled positive current. This structure yields uniqueness of tangent cones, orbifold regularity on the orbifold locus, simple connectivity, and a one-end result in the noncompact case. A separate application gives long-time curvature control near points that are quantitatively close to self-similar.
abstract_ja: >-
  非崩壊Kähler--Ricci流の極限から生じる任意の特異Kähler--Ricci収縮ソリトンが、局所代数的な複素解析多様体の自然な構造を持ち、特異点がkltであることを示す。そこから単連結性、非コンパクトな場合の端の一意性、各点での接錐の一意性、複素余次元3以上の部分を除く滑らかなorbifold構造を導く。さらに、ほぼ自己相似なKähler--Ricci流に対する長時間擬局所性を証明する。
abstract_source_url: "https://arxiv.org/abs/2605.25213"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.25213v1](https://arxiv.org/abs/2605.25213)
- **著者:** Max Hallgren, Junsheng Zhang
- **初回投稿日・最終更新日:** 2026年5月24日
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler幾何のコンパクト性定理が与える極限では、正則部分に複素構造が残っても、それが特異集合を越えて標準的に延びるとは限らない。本論文はBamlerの $\mathbb F$-収束の枠組みで得られる非崩壊Kähler--Ricci流の特異収縮ソリトンについて、この延長問題を解く。

第一の主結果は、正則部分で正則な連続関数の層が極限空間を正規複素解析多様体にし、その特異点がkltになるというものだ。ソリトン形式も有界ポテンシャルを持つ正の $(1,1)$-currentへ延び、局所埋込みに対する正の下界を満たす。

解析構造の確立により、計量的特異集合と解析的特異集合が一致し、全ての点の接錐が一意なkltアフィン多様体上のKähler Ricci-flat coneになる。orbifold locusでは計量も滑らかなorbifold計量となる。

さらにソリトンのトーラス対称性を複素化し、モーメント写像像の凸性、単連結性、非コンパクトな場合の端の一意性、各点の準射影的局所モデルを得る。これは「極限が偏極Fano fibrationを持つ」というIntroductionの予想へ向けた構造定理であり、その予想自体を証明したものではない。

最後に、ほぼ自己相似な点の近くで曲率半径が長い時間区間にわたり下から制御される擬局所性定理を示す。解析空間構造の構成とRicci流の定量的制御が、一つの極限モデルを介して結びついている。

## 背景と問題設定

対象はコンパクトKähler--Ricci流の非崩壊極限として現れるmetric soliton $X$ であり、正則部 $\mathcal R_X$ は一般に不完備な滑らかなKähler--Ricci shrinkerである。従来、偏極Kähler多様体のGromov--Hausdorff極限ではDonaldson--Sunらが解析性と接錐の一意性を得ていたが、一般のRicci流コンパクト性はGromov--Hausdorff収束ではなく $\mathbb F$-収束を自然に要求する。

Introductionは、極限 $X$ が偏極Fano fibrationを持ち、したがって準射影的になるというConjecture 1.1を掲げる。本論文はその前段階として、まず特異集合を横切る解析構造と局所代数性を確立する。

## 主結果

### 解析構造と接錐（Theorem A）

$\mathcal O_X$ を、正則部への制限が正則である連続関数の層とする。このとき $(X,\mathcal O_X)$ はklt特異点を持つ正規複素解析多様体になる。ソリトン形式 $\omega_X$ は有界ポテンシャルを持つ正の $(1,1)$-currentとして延長し、各 $p\in X$ の近傍 $U_p\hookrightarrow\mathbb C^N$ で

$$
\omega_X\ge c_p\,\omega_{\mathbb C^N}|_{U_p}
$$

を満たす。さらに計量的・解析的特異集合が一致し、接錐は各点で一意で、kltアフィン多様体上のKähler Ricci-flat coneとなる。$X$ のorbifold locusでは $\omega_X$ は滑らかなorbifold計量である。

### トーラス作用と位相（Theorem B）

ソリトンベクトル場に付随するコンパクトトーラス $T$ の作用は複素化 $T^{\mathbb C}$ の正則作用へ延びる。モーメント写像 $\mu$ の像 $\mu(X)$ は閉凸集合であり、$X$ は単連結、非コンパクトなら端をちょうど一つ持つ。また任意の点は、代数的 $T^{\mathbb C}$-作用を持つ準射影多様体と同変双正則なZariski開近傍を持つ。

### 長時間擬局所性（Theorem C）

Introductionでは概略として次のように述べられている。entropyの下界と自己相似性の定量的近似を仮定すると、指定された放物的近傍内で一時刻に曲率半径が $\sigma_0r$ 以上である点では、より長い過去の時間区間を通じて曲率半径が $\sigma r$ 以上に保たれる。定数 $\delta,\sigma$ は幾何的範囲 $D$、entropy bound $W$、$\sigma_0$ のみに依存する。

## 証明の見取り図

解析構造にはDonaldson--Sun型の方針を採り、反標準束と重み付き体積形式を偏極データとして扱う。熱核からcut-off関数を構成し、特異空間上のHörmander型 $L^2$ 評価を導く。特異集合の最適なMinkowski content評価がない点は精密Kato不等式で補い、shinker方程式とPerelmanの微分Harnack不等式でポテンシャルの二階微分項を制御する。

得られた反標準多重切断の $C^0$・$C^1$ 評価から正規解析多様体を構成し、既存の方法を適用してklt性を示す。Theorem Bでは複素還元群作用のquotient理論を、$\omega_X$ の局所下界と正則ベクトル場の局所有界性によって特異計量へ適用する。Theorem Cは時間方向ベクトル場の完備性と背理法・コンパクト性から導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.25213](https://arxiv.org/abs/2605.25213)
- **Introduction:** Section 1, pp. 1--4
- **Introduction中で言及された主要定理番号:** Theorems A, B, C; Conjecture 1.1
- **論文構成の説明:** pp. 3--4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
