---
layout: paper
title: Variation of cones of divisors in a family of varieties -- Fano type case
title_ja: Fano型多様体の族における因子錐とMMPの変形不変性
authors: Sung Rak Choi, Zhan Li, Chuyu Zhou
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We investigate the relationship between the Fano type property on fibers over a Zariski dense subset and the global Fano type property. We establish the invariance of N\'eron-Severi spaces, nef cones, effective cones, movable cones, and Mori chamber decompositions for a family of Fano type varieties after a generically finite base change. Additionally, we show the uniform behavior of the minimal model program for this family. These results are applied to the boundedness problem of Fano type varieties.
topic: algebraic-geometry
tags:
- fano-varieties
- moduli
- minimal-model-program
- birational-geometry
- positivity
arxiv_id: 2504.04109v7
arxiv_url: https://arxiv.org/abs/2504.04109
arxiv_submitted: '2025-04-05'
arxiv_updated: '2026-10-11'
summary: Fano型のファイバーを持つ族で、底の縮小と生成的有限な基底変換の後に因子の錐とMori chamber分解が一定になる条件を示す。MMPの各段階もファイバー間で対応し、固定されたFano型の族の双有理収縮モデルの有界性に結びつく。
abstract_en: We investigate the relationship between the Fano type property on fibers over a Zariski dense subset and the global Fano type property. We establish the invariance of N\'eron-Severi spaces, nef cones, effective cones, movable cones, and Mori chamber decompositions for a family of Fano type varieties after a generically finite base change. Additionally, we show the uniform behavior of the minimal model program for this family. These results are applied to the boundedness problem of Fano type varieties.
summary_en: ''
abstract_ja: Zariski稠密な集合上のファイバーがFano型であることから、族全体の相対的なFano型性をどこまで導けるかを調べる。適切な追加条件の下で、底の縮小と優勢かつ生成的有限な基底変換によりNéron–Severi空間、有効錐、nef錐、可動錐、Mori chamber分解が不変になる。さらにMMPを族全体で一様に扱い、Fano型多様体の双有理収縮モデルの有界性に応用する。
abstract_source_url: https://arxiv.org/abs/2504.04109
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2504.04109v7](https://arxiv.org/abs/2504.04109)
- **著者:** Sung Rak Choi, Zhan Li, Chuyu Zhou
- **初回投稿日:** 2025-04-05
- **最終更新日:** 2026-10-11
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

多様体のnef錐や可動錐は、どの因子が正値性を持ち、どの双有理モデルが現れるかを記録する。しかし族を動かすと、錐だけでなくそれを置くNéron–Severi空間の次元まで変わり得る。本論文はFano型の族で、どの程度これらのデータを共通化できるかを扱う。

出発点は、稠密な集合上でファイバーがFano型である場合に、族全体も相対的にFano型となるかという問題である。著者らは一般の場合にはlc Calabi–Yau型の境界の存在を示し、weak Fano性などの追加仮定の下でFano型性まで得る。単に「稠密なファイバーがFano型なら常に十分」とは結論しない。

この準備の下で、底の縮小と適切な基底変換の後に各種因子錐、Mori chamber分解、MMPの挙動が一定になる。最後に、固定されたFano型の族から生じる双有理収縮モデル全体が有界であることを導く。特異ファイバーを含む族で、モジュライの問題とMMPを結びつける結果である。

## 背景と問題設定

<p>基礎体は複素数体である。射影多様体 $X$ がFano型であるとは、境界 $\Delta$ を選んで $(X,\Delta)$ をklt、$-(K_X+\Delta)$ をampleにできることをいう。因子の数値同値類の空間 $N^1(X)$ の中に、有効錐 $\operatorname{Eff}(X)$、nef錐 $\operatorname{Nef}(X)$、可動錐 $\operatorname{Mov}(X)$ があり、可動錐にはMori chamber分解がある。</p>

滑らかなFano多様体の族ではnef錐の局所不変性が知られる一方、特異点を許すと例外が生じる。またmonodromyのため、局所自明な族でも異なるファイバーのNéron–Severi空間を自然に同一視できるとは限らない。本論文の基底変換と開集合への制限は、この二つの問題に対応する。

## 主結果

### 稠密なFano型ファイバーから得られる構造（Theorem 1.2）

<p>射影全射 $f:X\to T$ が $f_*\mathcal O_X=\mathcal O_T$ を満たし、Zariski稠密な $S\subset T$ の各ファイバーがFano型なら、底を縮小してlc対 $(X,D)$ を取り、</p>

<div>
$$
K_X+D\sim_{\mathbb Q}0/T
$$
</div>

とできる。さらに、稠密集合上でのファイバーがklt weak Fanoである場合、Fano型ファイバーの集合がvery generalな点からなる場合、またはそれらのファイバーに有界なklt complementがある場合には、縮小後の全空間は底上Fano型となる。一般のFano型ファイバーだけを仮定するQuestion 1.1に対しては部分的な回答である。

### Néron–Severi空間の共通化（Theorem 1.3）

<p>射影ファイブレーションの稠密なファイバーが有理特異点を持ち、$H^1(X_s,\mathcal O_{X_s})=H^2(X_s,\mathcal O_{X_s})=0$ とする。優勢で生成的有限な基底変換を行えば、空でない開集合 $T_0$ 上で相対Picard層を実数係数で定数層にでき、すべての開集合 $U\subset T_0$ と $t\in U$ について</p>

<div>
$$
N^1(X_{T_0}/T_0)\longrightarrow N^1(X_U/U)\longrightarrow N^1(X_t)
$$
</div>

は同型となる。もともとの制限写像がvery generalなファイバーで全射なら、基底変換なしに開集合への制限でよい。この結果はFano型に限らない消滅条件で述べられる。

### ファイバーごとの小さな改変（Theorem 1.4）

<p>Theorem 1.3と同じ特異点・コホモロジー消滅の仮定に加え、$(X,\Delta)$ がkltとなる因子が存在するとする。適切な基底変換と底の縮小の後、$Y\to X$ と各 $Y_t\to X_t$ を同時に小さな $\mathbb Q$-factorial改変にできる。$X$ と $Y$ の双方で前節のNéron–Severi空間の同型も成立する。</p>

### 錐とchamber分解の不変性（Theorem 1.5）

Theorem 1.2の追加条件のいずれかを満たす族では、生成的有限な基底変換と開集合への制限の後、有効錐・nef錐・可動錐とMori chamber分解が変形不変になる。これは全空間の相対Néron–Severi空間から各ファイバーへの制限同型による同一視である。制限写像がvery generalな点で全射なら基底変換を省けるが、一般に開集合への縮小は必要である。

### MMPの一様性（Theorem 1.6）

<p>同じ仮定の下で、相対的な $D$-MMPは各ファイバー上のMMPを誘導し、各段階が因子的収縮・flip・ファイバー型のどれであるかも一致する。逆に、ファイバー上のMMPは適切な相対因子を選んだ全空間のMMPから得られる。</p>

<p>さらに相対双有理収縮 $g:X'\dashrightarrow Y/U$ の終域が $\mathbb Q$-factorialなら、ファイバーへの制限も双有理収縮であり、実Cartier因子について</p>

<div>
$$
(g_t)_*(D|_{X'_t})\sim_{\mathbb R}(g_*D)|_{Y_t}
$$
</div>

が成り立つ。相対双有理収縮モデルのNéron–Severi空間とnef錐、および曲線の閉錐も対応する。したがって錐の不変性は、実際の双有理操作の対応にまで強められる。

### 双有理収縮モデルの有界性（Theorem 1.7）

固定されたFano型の族の各ファイバーから得られる正規射影双有理収縮モデルをすべて集めると、その集合は有界である。ここで有界とは、有限型のスキーム間の射のファイバーとしてパラメータ化できることをいう。すべてのFano型多様体を無条件に有界とする主張ではなく、固定された族からの収縮モデルについての結果である。

## 証明の見取り図

Introductionはまずcomplementの深い結果を用いて、稠密なファイバーのFano型性から相対的な構造を取り出すと説明する。次に相対Picard層とNéron–Severi空間を制御し、ファイバーごとの小さな改変を整えた上で、MMPと錐の変形不変性を扱う。

有界性への応用は、双有理有界性とモデルの有限性を組み合わせる方針である。著者らはこの部分が既存の議論に沿うことを明記し、とりわけファイバーごとの改変を正当化する点を明確にしている。

## 原論文との対応

- **Abstractページ:** [Variation of cones of divisors in a family of varieties -- Fano type case](https://arxiv.org/abs/2504.04109)
- **Introduction:** [PDF](https://arxiv.org/pdf/2504.04109v7) — Section 1, pp. 1–6。
- **Introduction中で言及された主要結果:** Theorems 1.2–1.7。Question 1.1に対する回答は部分的である。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2504.04109v7
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
