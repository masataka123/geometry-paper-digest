---
layout: paper
title: Fano orbifolds admit free Campana curves
title_ja: 弱Fano orbifold上の自由なCampana曲線
authors: Brian Lehmann, Sho Tanimoto
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  We prove that any Fano orbifold admits a free Campana curve in the sense of Campana. Moreover, assuming that any klt log Fano pair admits a very free rational curve in its smooth locus, we prove that any Fano orbifold is Campana rationally connected. As an application, we prove the finiteness of the orbifold fundamental groups for Fano orbifolds.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- fundamental-groups
- positivity
arxiv_id: 2609.37513v2
arxiv_url: https://arxiv.org/abs/2609.37513
arxiv_submitted: '2026-09-29'
arxiv_updated: '2026-10-01'
summary: |-
  標数零の弱Fano Campana orbifoldに、任意の自由度を持つ高種数も許したCampana曲線を構成する。複素数体上ではorbifold基本群の有限性が従う。有理連結性への強化は、klt log Fano対の滑らかな部分に非常に自由な有理曲線があるという予想を仮定する。
abstract_en: ''
summary_en: |-
  The article turns prescribed boundary contact into a problem on an auxiliary log Fano space. This produces highly free Campana curves without requiring them to be rational. The construction also yields finiteness of the orbifold fundamental group over the complex numbers. A separate conditional argument explains what is still needed to obtain rational connectedness.
abstract_ja: |-
  弱Fano orbifoldにおいて、ある固定した滑らかな射影曲線から任意に高い相対自由度を持つCampana曲線を得られることを示す。Seifert束に着想を得た補助的なklt log Fano対の構成が鍵となる。orbifold基本群の有限性は無条件に得られる一方、Campana有理連結性はklt log Fano対に関する有理曲線の予想の下で導く。
abstract_source_url: https://arxiv.org/abs/2609.37513
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.37513v2](https://arxiv.org/abs/2609.37513)
- **著者:** Brian Lehmann, Sho Tanimoto
- **初回投稿日:** 2026-09-29
- **最終更新日:** 2026-10-01
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Campana orbifoldは、境界因子に沿う接触次数を指定して曲線を調べる枠組みである。対数反標準因子の正値性から、その条件を満たす自由な曲線がどの程度存在するかを問うのが本論文の課題である。

著者らは標数零の弱Fano orbifoldに対し、ある固定した滑らかな射影曲線から、任意に高い相対自由度を持つCampana曲線を構成する。境界の接触条件を補助空間上の曲線の問題へ変換することが要点であり、すべての状況で都合のよい有限被覆が存在するとは仮定しない。

複素数体上ではorbifold基本群の有限性が従う。ただし構成される曲線の種数は一般に0とは限らない。Campana有理連結性を導くには、特異なklt log Fano対の滑らかな部分に非常に自由な有理曲線が存在するという予想が追加で必要である。

## 背景と問題設定

標数零の代数閉体上の正規射影多様体 $X$ と既約境界因子 $D_i$、正整数 $m_i$ に対し、

<div>
$$
D_\epsilon=\sum_i\left(1-\frac1{m_i}\right)D_i
$$
</div>

と置く。$(X,D_\epsilon)$ がkltで $-(K_X+D_\epsilon)$ がbigかつnefである場合を弱Fano orbifoldと呼ぶ。

Campana曲線 $s:C\to X$ は、像が境界に含まれず、対数滑らかな部分に入り、$D_i$ との各交点で接触次数が $m_i$ 以上となる曲線である。二つの一般点を通るCampana有理曲線の存在がCampana有理連結性である。「relatively $r$-free」の精密な定義は後続のDefinition 2.5に置かれているため、本記事ではIntroductionどおり、種数を許した曲線の自由度を表す性質として用いる。

## 主結果

### 主定理1：任意の相対自由度の実現（Theorem 1.3）

任意の弱Fano orbifoldに対し、ある滑らかな射影曲線 $C$ が存在して、すべての $r\ge0$ に対して対数滑らかな部分へのrelatively $r$-freeなCampana曲線 $s:C\to(X,D)_{\mathrm{sm}}$ が存在する。

曲線 $C$ を最初に固定してから自由度 $r$ を任意に大きくできるという量化の順序が重要である。また、この定理に $C\simeq\mathbb P^1$ という結論はない。

### 主定理2：補助的なlog Fano対（Theorem 1.4）

$\mathbb Q$-factorialな弱Fano orbifoldに対し、klt log Fano対 $(Y,\Delta)$ と優勢な等次元射影射 $f:Y\to X$ が存在する。各 $\frac1{m_i}f^*D_i$ は整係数で被約な因子となる。さらに $f$-相対的にampleな $\mathbb Q$-Cartier因子 $A$ を用いて

<div>
$$
-(K_Y+\Delta)\sim_{\mathbb Q}
-f^*\left(K_X+\sum_i\left(1-\frac1{m_i}\right)D_i\right)+A
$$
</div>

と書け、右辺はampleである。これは境界の接触条件を上の空間へ移すための構造定理である。

### 基本群の有限性（Theorem 1.7）

$k=\mathbb C$ のとき、弱Fano Campana orbifoldのorbifold基本群は

<div>
$$
|\pi_1^{\mathrm{orb}}(X,D_\epsilon)|\lt \infty
$$
</div>

を満たす。Introductionはこれを既知の有限性定理の特別な場合への新しい証明と位置付ける。有理曲線に関する未解決予想を仮定した結論ではない。

### 予想の下での有理連結性（Theorem 1.9）

すべてのklt log Fano対の滑らかな部分に非常に自由な有理曲線が存在するというConjecture 1.8を仮定すると、任意の弱Fano orbifoldがCampana有理連結となる。この条件付き結果をTheorem 1.3の無条件な高種数曲線の存在と混同してはならない。

## 証明の見取り図

境界の重複度を解消する理想的な有限被覆は一般には存在しない。そこでSeifert束に着想を得て、次元を増やした補助的なlog Fano対を構成する。Theorem 1.4で境界の引き戻しが指定された整数で割り切れるようになり、上の空間の自由な曲線をCampana条件に適合させられる。

IntroductionでTheorem 1.5として引用されるJLR25の既知の結果は、klt log Fano対の滑らかな部分に任意の相対自由度の曲線を与える。この結果を補助空間へ適用して主定理1へ進む。有理曲線の場合は同じ入力が予想段階であることが、Theorem 1.9が条件付きにとどまる理由である。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2609.37513)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2609.37513v2)、Section 1, pp. 1–4。
- **Introduction中で言及された主要結果:** Theorems 1.3・1.4・1.7・1.9、Conjecture 1.8。Theorem 1.5は先行研究の引用。
- **論文構成の説明:** Introduction, pp. 2–4の構成と応用の説明。
- **確認したarXivバージョン:** 2609.37513v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
