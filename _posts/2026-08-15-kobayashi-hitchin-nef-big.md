---
layout: paper
title: "The Kobayashi-Hitchin correspondence for nef and big classes"
title_ja: "nefかつbigな類に対する小林–Hitchin対応"
authors: "Satoshi Jinnouchi"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
topic: differential-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
  - higgs-nonabelian-hodge
arxiv_id: "2603.10312v1"
arxiv_url: "https://arxiv.org/abs/2603.10312v1"
arxiv_submitted: "2026-03-11"
arxiv_updated: "2026-03-11"
summary: >-
  nefかつbigな類に関する斜率多安定性と、ample locus上の特異なHermitian–Yang–Mills計量の存在・一意性を対応させる。
  特異Kähler–Einstein空間への応用と、Bogomolov–Gieseker等号から射影平坦性を導く結果も含む。
abstract_en: ""
summary_en: >-
  The paper extends the Kobayashi–Hitchin correspondence from Kähler classes to nef and big classes. It introduces adapted positive currents and adapted Hermitian–Yang–Mills metrics, and identifies the existence of such a metric with slope polystability. The framework also covers reflexive sheaves on certain singular Kähler varieties. An equality case of the Bogomolov–Gieseker inequality yields projective flatness on the ample locus.
abstract_ja: >-
  nefかつbigな類に適合する正閉$(1,1)$-currentとHermitian–Yang–Mills計量を定義し、ベクトル束の斜率多安定性との同値を証明する。対応は対数端末特異点をもつ正規Kähler多様体上の反射的層にも移される。さらに半安定層のJordan–Hölder次数付き層に適合計量を与え、Bogomolov–Gieseker等号の場合にはample locus上の射影平坦性を得る。
abstract_source_url: "https://arxiv.org/abs/2603.10312v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.10312v1](https://arxiv.org/abs/2603.10312v1)
- **著者:** Satoshi Jinnouchi
- **初回投稿日:** 2026年3月11日
- **最終更新日:** 2026年3月11日
- **主分類・副分類:** math.DG（主）、math.AG、math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

通常の小林–Hitchin対応は、Kähler類に関する斜率多安定性を滑らかなHermitian–Yang–Mills（HYM）計量の存在と結びつける。本論文は、境界で退化し得るnefかつbigな類までこの対応を拡張する。

著者は、類$\alpha$内の「適合した」正閉$(1,1)$-current $T$と、ample locus上で定義される$T$-適合HYM計量を導入する。$T$は正定値である必要がなく、その特異性を明示的に記述する必要もない点が特徴である。

主結果は、コンパクトKähler多様体上の正則ベクトル束$E$について、$\alpha^{n-1}$-斜率多安定性と$T$-適合HYM計量の存在が同値であり、存在する計量は定数倍を除いて一意だという完全な対応である。

さらに、半安定な捩れなし層のJordan–Hölder次数付き層、klt正規Kähler多様体上の反射的層、Bogomolov–Gieseker不等式の等号場合へ応用する。最後の応用では、等号からample locus上の局所自由性と射影平坦性が従う。

## 背景と問題設定

DonaldsonとUhlenbeck–Yauの定理、その反射的層版であるBando–Siuの理論は、滑らかなKähler計量を基礎とする。nefかつbigな類では、最小特異性をもつ正currentは一般に正定値でなく、特異性も明示できないため、従来の解析をそのまま適用できない。

適合currentはample locus上で滑らかなKähler計量となり、修正上では非Kähler locusの定義切断による下からの評価と、一様な$L^p$密度評価をもつKähler近似を備える。適合HYM計量には

$$
\sqrt{-1}\Lambda_T F_h=\lambda\operatorname{Id}
$$

に加え、曲率の有限エネルギーと非Kähler locus付近の増大を制御する条件が課される。

## 主結果

### 小林–Hitchin対応（Theorem 1.4）

$X$をコンパクトKähler多様体、$\alpha$をnefかつbigな類、$T\in\alpha$を適合正current、$E$を正則ベクトル束とする。このとき次は同値である。

1. $E$は$\alpha^{n-1}$-斜率多安定である。
2. $E$は$T$-適合HYM計量をもつ。

計量は存在すれば定数倍を除いて一意である。解消を通じ、同じ対応は正規解析多様体上の反射的層にも及ぶ（Corollary 1.6）。

### 半安定層と特異Kähler–Einstein空間（Theorem 1.7、Corollary 1.8）

$\alpha^{n-1}$-斜率半安定な捩れなし層はJordan–Hölder filtrationをもち、その次数付き層には一意な適合HYM計量が入る。また、対数端末特異点をもつ正規Kähler多様体に特異Kähler–Einstein計量$\omega$がある場合、反射的層の$\{\omega\}^{n-1}$-斜率多安定性は$\omega$-適合HYM計量の存在と同値になる。

### Bogomolov–Gieseker不等式と等号（Theorem 1.12）

階数$r$の$\alpha^{n-1}$-斜率多安定反射的層$E$に対し、

$$
\bigl(2r c_2(E)-(r-1)c_1(E)^2\bigr)\cdot\alpha^{n-2}\geq 0
$$

が成り立つ。等号なら$E$は$\operatorname{Amp}(\alpha)$上で局所自由かつ射影平坦である。この等号部分は、射影多様体で$\alpha$がnefかつbigな直線束の第一Chern類の場合にも新しいとIntroductionは述べる。

## 証明の見取り図

非Kähler locusを単純正規交差因子にした後、$T$を滑らかなKähler計量$\omega_i$で近似する。安定な$E$にはUhlenbeck–Yauにより$\omega_i$-HYM計量があり、その接続へUhlenbeckコンパクト性を適用してample locus上の極限を得る。

核心は極限を束$E$上の適合計量として制御する一様評価である。Guo–Phong–Sturm型の平均値不等式により非Kähler locus付近の増大を抑え、弱正則部分束のChern–Weil公式を拡張して、極限で生じ得る不安定化部分層を排除する。逆向きと一意性にはChern–Weil計算と安定束間の正則写像の剛性を用いる。

## 原論文との対応

- **Abstractページ:** arXiv Abstract
- **Introduction:** Section 1, pp. 2–9
- **Introduction中で言及された主要定理番号:** Theorem 1.4, Theorem 1.7, Theorem 1.12; Corollary 1.6, 1.8, 1.9
- **論文構成の説明:** Introduction, Section 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
