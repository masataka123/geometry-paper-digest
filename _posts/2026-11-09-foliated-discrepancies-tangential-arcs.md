---
layout: paper
title: Foliated and Mather-Jacobian discrepancies via tangential arcs
title_ja: 接弧による葉層discrepancyと随伴の比較
authors: Maurício Corrêa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
- math.DS
arxiv_abstract: We express the log discrepancies of co-rank one foliations on normal varieties in terms of arc codimensions and differential orders. On smooth threefolds, if a foliation has simple singularities and its separatrices form an algebraic simple normal crossings divisor, we identify its foliated discrepancies with those of an ordinary pair for every divisor centred on the separatrices. This gives adjunction and log canonical threshold formulae. For algebraic images of the separatrices, we estimate changes in boundary orders caused by failure of ideal generation and by descent through the conductor. For locally complete intersection images, comparison on a common resolution yields criteria for equality of discrepancies and bounds on log canonical thresholds.
topic: algebraic-geometry
tags:
- foliations
- singularities
- birational-geometry
arxiv_id: 2607.01809v3
arxiv_url: https://arxiv.org/abs/2607.01809
arxiv_submitted: '2026-07-02'
arxiv_updated: '2026-11-05'
summary: 余次元1葉層のlog discrepancyを、弧空間の余次元と微分形式の位数から復元する公式を示す。滑らかな三次元多様体上で単純特異点を持ち、separatrixが代数的SNC因子をなす場合には、葉層のdiscrepancyを通常の対のdiscrepancyへ置き換え、随伴と閾値の比較へつなぐ。
abstract_en: We express the log discrepancies of co-rank one foliations on normal varieties in terms of arc codimensions and differential orders. On smooth threefolds, if a foliation has simple singularities and its separatrices form an algebraic simple normal crossings divisor, we identify its foliated discrepancies with those of an ordinary pair for every divisor centred on the separatrices. This gives adjunction and log canonical threshold formulae. For algebraic images of the separatrices, we estimate changes in boundary orders caused by failure of ideal generation and by descent through the conductor. For locally complete intersection images, comparison on a common resolution yields criteria for equality of discrepancies and bounds on log canonical thresholds.
summary_en: ''
abstract_ja: 正規多様体上の余次元1葉層について、最大divisorial集合の余次元と微分の位数を組み合わせ、log discrepancyおよび因子の不変性を検出する。単純特異点を持つ滑らかな三次元多様体上の葉層で、separatrixが代数的単純正規交差因子をなすとき、その上に中心を持つ因子の葉層discrepancyは通常の対のdiscrepancyと一致する。この比較を随伴、最小log discrepancy、log canonical thresholdへ適用する。separatrixの特異な代数的像では、イデアル生成やconductorを通じた降下、解消上の相対標準因子による補正を分けて扱う。
abstract_source_url: https://arxiv.org/abs/2607.01809
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.01809v3](https://arxiv.org/abs/2607.01809)
- **著者:** Maurício Corrêa
- **初回投稿日:** 2026-07-02
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.AG（主分類）; math.CV, math.DS
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

通常の特異点論では、因子的付値を弧空間の集合として表し、その余次元からdiscrepancyを読み取る。葉層の場合には、引き戻した定義1形式の飽和化と、例外因子が葉層に不変かどうかという追加情報が必要になる。本論文はこの情報を微分の位数に組み込む。

主公式は同じ付値$v$と$2v$での位数を比較する。単一の接触次数だけでは失われる不変因子の補正を、この差が検出する仕組みである。正規で特異な空間にも適用でき、滑らかな場合には定義1形式の引き戻しの位数で書ける。

応用では、滑らかな三次元多様体上の単純特異点を持つ葉層を扱う。separatrixが代数的SNC因子をなすという仮定の下で、葉層の問題を通常の対の随伴へ移す。ただしseparatrixの特異な像へ移った場合にdiscrepancyが自動的に一致するわけではなく、複数の補正を追跡する必要がある。

## 背景と問題設定

$X$を次元$n\geq2$の正規複素多様体、$\mathcal F\subset T\_X$を余次元1葉層とする。$K\_{\mathcal F}+\Delta$は$\mathbb Q$-Cartierと仮定する。因子$E$について葉層log discrepancyは

$$
A\_{\mathcal F}(E;X,\Delta)=a(E;\mathcal F,\Delta)+\epsilon(E)
$$

であり、$\epsilon(E)$は不変因子なら0、それ以外なら1である。$v=q\operatorname{ord}\_E$に対する最大divisorial集合を$C\_X(v)$、その一般弧を$\gamma\_v$と書く。

$\mathcal L\_r=\mathcal O\_X(r(K\_{\mathcal F}+\Delta))$が可逆となる$r>0$を取り、一般点でのconormal列から得られる像

$$
\mathcal P\_r(\mathcal F,\Delta)=\operatorname{im}\left[
(\bigwedge^n\Omega\_X^1)^{\otimes r}\otimes\mathcal L\_r^{-1}
\longrightarrow(\Omega^1\_{\mathbb C(X)/\mathbb C})^{\otimes r}\right]
$$

を考える。$\vartheta\_{\mathcal F,\Delta}(v)=r^{-1}\operatorname{ord}\_{\gamma\_v}\mathcal P\_r(\mathcal F,\Delta)$が主公式に現れる微分位数である。

## 主結果

### 主定理1：弧の余次元と微分位数（Theorem 1.1）

上記の位数は有限で$r$に依存せず、任意の因子的付値について

$$
A\_{\mathcal F}(v;X,\Delta)=\operatorname{codim}C\_X(v)
+\vartheta\_{\mathcal F,\Delta}(v)-\vartheta\_{\mathcal F,\Delta}(2v)
$$

が成り立つ。また

$$
\vartheta\_{\mathcal F,\Delta}(2v)-2\vartheta\_{\mathcal F,\Delta}(v)=\delta\_E
$$

であり、$\delta\_E$は不変因子なら1、それ以外なら0である。滑らかな$X$で局所的な飽和定義1形式を$\omega$とし、その引き戻しの位数を$t\_{\mathcal F}(v)$とすると、

$$
A\_{\mathcal F}(v;X,\Delta)=\operatorname{codim}C\_X(v)
+t\_{\mathcal F}(v)-t\_{\mathcal F}(2v)-v(\Delta)
$$

となる。因子ごとのlog canonicityは、同じ$r$を用いて

$$
A\_{\mathcal F}(E;X,\Delta)\geq0
\quad\Longleftrightarrow\quad
\vartheta\_{\mathcal F,\Delta}((r+1)\operatorname{ord}\_E)
\leq\operatorname{codim}C\_X((r+1)\operatorname{ord}\_E)
$$

と判定される。葉層全体のlog canonicityには全因子での条件が必要である。

### 主定理2：separatrix上の通常の対との比較（Theorem 7.7のIntroductionでの記述）

滑らかな三次元多様体$W$上の葉層$\mathcal H$が単純特異点を持ち、そのseparatrix全体が原論文Section 7の設定で代数的SNC因子$D$をなすとする。$D$内に中心を持つ任意の素因子$E$と有理因子$B$について、

$$
A\_{\mathcal H}(E;W,B)=A(E;W,D+B)
$$

が成り立つ。これにより各separatrix上で通常の随伴を使える。Introductionは、他のseparatrixと$B$から来る境界に有効補正$R\_i$を加えること、branch上の有限の閾値を計算する因子から同じ閾値を計算する無限個のambient不変因子が得られることを説明する。後者の精密な設定はTheorems 8.7、8.12に委ねられており、ここではその範囲を超えて一般化しない。

## 証明の見取り図

Introductionでは、弧の余次元を与える通常・Matherのdiscrepancy公式に、定義1形式の飽和化と不変性を加えるのが主公式の考え方である。三次元の単純特異点ではCanoの正規形を用いて、接弧が形式的separatrixの合併内にあることを調べる。その後、通常の随伴とinversion of adjunctionへ移す。

特異な像については、branchのイデアルを像のイデアルが生成しない誤差と、conductorを通じて降下しない誤差を分ける。それらが消えてもMather–Jacobian discrepancyと解消上の通常のdiscrepancyは一般に同じではなく、局所完全交差の場合にも相対標準因子を含む比較が必要になる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2607.01809)
- **Introduction:** [PDF](https://arxiv.org/pdf/2607.01809v3) — Section 1, pp. 1–2（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; Introduction中のTheorems 7.7, 7.9, 8.7, 8.12およびProposition 9.14への言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2607.01809v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
