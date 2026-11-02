---
layout: paper
title: A Yau-Tian-Donaldson correspondence for degenerations
title_ja: Fano多様体の退化に対するYau–Tian–Donaldson対応
authors: Gabriel Frey
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove an equivalence between the existence of a unique K\"ahler-Einstein metric on a degeneration of Fano varieties and uniform CM minimization. This proves a discretely valued analogue of the (uniform) Yau-Tian-Donaldson conjecture, in the sense of non-Archimedean geometry. As a main tool, we prove that Ding stability of a degeneration implies uniform Ding minimization, proving a converse to work of Blum-Xu. We also prove an analogous result in geometric invariant theory (GIT), stating that uniform GIT height minimization of a family of points is equivalent to GIT stability, proving a converse to work of Wang, Wang-Xu and the author.
topic: algebraic-geometry
tags:
- fano-varieties
- k-stability
- kahler-einstein-metrics
- moduli
arxiv_id: 2610.39996v1
arxiv_url: https://arxiv.org/abs/2610.39996
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: Fano多様体の退化について、中心ファイバーのKähler–Einstein計量と族の一様CM最小化を結ぶ。滑らかなアフィン曲線上の族へ延長できる特殊退化を対象に、中心ファイバーのK安定性から族の最小化への既知の方向に加え、その逆を示す。
abstract_en: ''
summary_en: This work treats a family over a discrete valuation ring as an object of stability theory in its own right. Its main comparison identifies the minimization property of that family with stability of the special fiber. In the Fano setting, this yields a metric interpretation through the Yau–Tian–Donaldson correspondence. The construction also gives a parallel statement for families of points in geometric invariant theory.
abstract_ja: 本論文は、離散付値環上のFano多様体の退化を、中心ファイバーの安定性と族の不変量の最小化という二つの観点から調べる。指定された特殊退化に対し、一意なKähler–Einstein計量の存在と一様CM最小化が同値となることを示す。弱い最小化とK半安定性の対応、ならびにGIT高さの最小化と中心点のGIT安定性との対応も得る。証明では中心ファイバーのフィルトレーションを一般ファイバーへ移し、Ding不変量を保つ構成が中心となる。
abstract_source_url: https://arxiv.org/abs/2610.39996
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.39996v1](https://arxiv.org/abs/2610.39996)
- **著者:** Gabriel Frey
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準的な計量と代数幾何学的安定性の対応を、一つの多様体から退化する族へ広げるのが本論文の課題である。族の一般ファイバーは定数族である必要がなく、中心ファイバーの幾何学を族全体のCM最小化から認識する。

著者は、所定のFano特殊退化について、中心ファイバーに一意なKähler–Einstein計量が存在することと、一様CM最小化が同値になることを示す。代数幾何学的には、一様CM最小化と中心ファイバーのK安定性、弱CM最小化とK半安定性がそれぞれ対応する。

中心ファイバーの安定性から最小化を導く方向にはBlum–Xuの先行研究がある。本論文は逆方向を与え、離散付値の非Archimedes幾何におけるYau–Tian–Donaldson対応として位置づける。GIT高さについても同種の逆方向を確立するが、自己同型を許す多重安定版や一般のcscK退化への拡張は今後の問題として区別されている。

## 背景と問題設定

$R$ は剰余体が $\mathbb C$、分数体が $K$ の完備離散付値環とする。対象はFano多様体の特殊退化 $\mathcal X\to\operatorname{Spec}R$ であり、滑らかなアフィン曲線上のFano族に延長できることを仮定する。中心ファイバー $X\_0$ は正規かつkltで、偏極には相対反標準束を用いる。

CM最小化は、同じ一般ファイバーを持つモデルの間でCM不変量を比較する条件である。従来のK安定性が主に一つの多様体の試験配置を用いるのに対し、ここでは非自明な一般ファイバーの族も対象にする。Introductionは弱い最小化と一様最小化を区別し、以下の対応を述べている。

## 主結果

### 計量と退化の対応（Theorem 1.1）

上記の特殊退化について、

$$
X\_0\text{ が一意なKähler–Einstein計量を持つ}
\quad\Longleftrightarrow\quad
\mathcal X\text{ が一様CM最小化を満たす}
$$

が成り立つ。単に計量の存在のみを問う定式化ではなく、一意性を含む条件である。族が滑らかなアフィン曲線へ延長できるという仮定も維持する。

### 中心ファイバーのK安定性（Theorem 1.2）

同じ設定で、代数幾何学的対応は次の二つである。

$$
\mathcal X\text{ が弱CM最小化を満たす}\quad\Longleftrightarrow\quad X\_0\text{ がK半安定},
$$

$$
\mathcal X\text{ が一様CM最小化を満たす}\quad\Longleftrightarrow\quad X\_0\text{ がK安定}.
$$

著者はこれをK安定性に関する随伴の逆方向として説明する。K安定性と一様K安定性の既知の同値、およびFanoの場合のYau–Tian–Donaldson対応を併用して計量の定理へ進む。

### GIT高さの対応（Theorem 1.3）

簡約群 $G$ が偏極多様体 $(Y,L\_Y)$ に作用し、$\varphi$ が $Y$ の $R$ 値点であるとする。このとき、弱GIT高さ最小化と $\varphi(0)$ のGIT半安定性、一様GIT高さ最小化と $\varphi(0)$ のGIT安定性がそれぞれ同値になる。比較は、一般点上で $G(K)$ の作用により結びつく別の $R$ 値点との間で行う。

## 証明の見取り図

Introductionでは、まず一様CM最小化を一様Ding最小化へ置き換え、Ding不変量を切断環のフィルトレーションで扱う。新しい構成は、中心ファイバー上のフィルトレーションから一般ファイバー上のフィルトレーションを作り、Blum–Xuの制限構成の逆となるようにするものである。

この移行でDing不変量を保ち、フィルトレーションの近似に対する収束を使うことにより、退化の最小化と中心ファイバーの安定性を比較する。Introductionは第3節を制限と不変量、第4節を逆構成とGIT、第5節を主定理の完成に充てると説明している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.39996)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.39996v1) — Section 1.1–1.4, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.39996v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
