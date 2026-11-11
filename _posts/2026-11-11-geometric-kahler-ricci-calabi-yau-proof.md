---
layout: paper
title: A geometric Kähler--Ricci flow proof of the Calabi--Yau theorem
title_ja: Kähler–Ricci流によるCalabi–Yau定理の幾何学的証明
authors: Bennett Chow, Yuan Liao
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We give a geometric proof that every Kähler class on a compact Kähler manifold with vanishing real first Chern class contains a unique Ricci-flat metric, and that the Kähler--Ricci flow converges smoothly to this metric. The fixed Kähler class and the bounded logarithmic volume density control the mean pairwise distance. Chow's scalar-curvature decay makes available, at a fixed spatial scale and all sufficiently late times, the relative-volume comparison of Jian--Song, derived from Bamler's pointed Nash entropy estimates. This comparison upgrades the mean-distance bound to a diameter bound without an absolute lower bound for entropy. A restarted heat-gradient estimate then gives exponential decay of the Ricci potential. A parabolic Schwarz estimate and the interior estimates of Sherman--Weinkove yield smooth exponential convergence. The proof does not invoke the Calabi--Yau existence theorem or global estimates for a scalar complex Monge--Ampère equation.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- calabi-yau-geometry
- kahler-einstein-metrics
- chern-classes
- curvature
arxiv_id: 2611.12800v1
arxiv_url: https://arxiv.org/abs/2611.12800
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 実第一Chern類零のコンパクトKähler多様体上で、Kähler–Ricci流が各Kähler類の一意なRicci平坦計量へ滑らかに指数収束することを幾何学的に証明する。平均距離と相対体積比較から直径を先に制御し、Calabi–Yau存在定理やスカラーMonge–Ampère方程式の大域評価を前提としない証明を与える。
abstract_en: We give a geometric proof that every Kähler class on a compact Kähler manifold with vanishing real first Chern class contains a unique Ricci-flat metric, and that the Kähler--Ricci flow converges smoothly to this metric. The fixed Kähler class and the bounded logarithmic volume density control the mean pairwise distance. Chow's scalar-curvature decay makes available, at a fixed spatial scale and all sufficiently late times, the relative-volume comparison of Jian--Song, derived from Bamler's pointed Nash entropy estimates. This comparison upgrades the mean-distance bound to a diameter bound without an absolute lower bound for entropy. A restarted heat-gradient estimate then gives exponential decay of the Ricci potential. A parabolic Schwarz estimate and the interior estimates of Sherman--Weinkove yield smooth exponential convergence. The proof does not invoke the Calabi--Yau existence theorem or global estimates for a scalar complex Monge--Ampère equation.
summary_en: ''
abstract_ja: Kähler–Ricci流によるCalabi–Yau定理の証明を、距離・体積と熱方程式の評価で組み立て直す。固定されたKähler類と有界な対数体積密度が平均距離を制御し、スカラー曲率の減衰と相対体積比較から直径の一様上界を得る。その後、Ricciポテンシャルの指数減衰、Schwarz評価、内部正則性を順に用い、流の滑らかな指数収束を導く。
abstract_source_url: https://arxiv.org/abs/2611.12800
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12800v1](https://arxiv.org/abs/2611.12800)
- **著者:** Bennett Chow, Yuan Liao
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Calabi–Yau定理は、実第一Chern類が消えるコンパクトKähler多様体の各Kähler類に、一意なRicci平坦計量があることを述べる。Yauの楕円型方程式による証明と、CaoのKähler–Ricci流による証明が知られている。本論文が提示するのは、この結論そのものの初出ではなく、新しい幾何学的な証明経路である。

著者らは流に沿う平均距離をコホモロジーから評価し、相対体積比較によって直径の一様上界へ引き上げる。この順序により、計量の一様同値性を直径評価の前提にせずに済む。

直径を得た後には、熱方程式を時間区間ごとに再始動させてRicciポテンシャルの振動を指数的に縮める。Schwarz評価と内部正則性を最後に使い、任意階の微分まで指数収束を得る。既存のCalabi–Yau計量の存在を引用して証明を循環させない点に重点がある。

## 背景と問題設定

$(M,J,\omega\_0)$を連結コンパクトKähler多様体、$n=\dim\_{\mathbb C}M\ge1$とし、$c\_1(M)=0$を実コホモロジーで仮定する。論文の時間規約ではKähler–Ricci流は

$$
\frac{\partial\omega}{\partial t}=-2\rho(\omega),\qquad \omega(0)=\omega\_0
$$

である。$\rho$はRicci形式であり、Kähler類は時間によらず一定となる。

一般にスカラー曲率の制御だけでは直径や計量の一様同値性は従わない。また既知の直径評価をそのまま使うと、その証明にYauの定理やMonge–Ampère評価が含まれ、本論文の目的には循環的となる場合がある。そこで必要な直径評価自体を独立に組み立てる。

## 主結果

### 主定理：Ricci平坦計量と流の指数収束（Theorem 1.1）

$[\omega\_0]$には一意なRicci平坦Kähler形式$\omega\_\infty$があり、上の流はすべての$t\ge0$で存在する。さらに各整数$k\ge0$に対して定数$C\_k,c\_k>0$が存在し、

$$
\Vert \omega(t)-\omega\_\infty\Vert \_{C^k(g\_0)}\le C\_k e^{-c\_k t}
$$

が成り立つ。複素構造と基礎多様体は固定され、任意の初期Kähler類について結論が得られる。標準束の正則な自明化を最初から選ぶことは仮定しない。

この定理の新規性は、既知の存在・収束の結論を、距離の平均、相対体積比較、熱方程式の減衰という幾何学的な鎖で導く点にある。Ricci曲率の一様下界や一様非崩壊を追加仮定として置かない。

## 証明の見取り図

第一Chern類零の条件から、Ricci形式が零の固定体積形式$\Omega$を線形Poisson方程式で用意する。$f=\log(\Omega/dV\_{g(t)})$は熱方程式を満たし、最大原理が体積密度の上下界を与える。ここではRicci平坦計量の存在を先に使わない。

固定Kähler類から$\int\_M\operatorname{tr}\_{g\_0}g(t)\thinspace dV\_{g\_0}$を制御し、背景計量のsegment inequalityで点対間距離の平均を抑える。次にChowのスカラー曲率の減衰$|R|\le C/(1+t)$を用いて、十分遅い時刻の固定空間スケールでJian–Songの相対体積比較を適用する。この比較はBamlerのpointed Nash entropyの評価に基づき、絶対エントロピー下界を要求しない。遠く離れた球が一定割合の体積を持つなら平均距離の上界に矛盾する、という形で直径を抑える。

直径と熱勾配評価により、一定時間ごとに$f$の振動が一定比率で縮小する。指数減衰の時間積分が有限になることから放物型Schwarz評価を一様化し、Sherman–Weinkoveの内部評価で高階微分を制御する。これによって滑らかな収束と各階での指数率へ至る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12800)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12800v1) — Section 1, pp. 1–3（Section 2より前）
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12800v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
